import { useEffect, useState } from "react";
import calculateIdealWeightLimitFromIMC from "../../utils/calculateIdealWeight";
import MessageMuchUnderThin from "./MessageMuchUnderThin";
import MessageIdealWeight from "./MessageIdealWeight";
import MessageAboveFat from "./MessageAboveFat";
import imcTable from "./imcTable";
import calculateIndexOfTheImcLimit from "./calculateIndexOfTheImcLimit";
import ImcTableComponent from "./ImcTableComponent";

type Props = {
	imcParameters: {
		height: string;
		weight: string;
	};
	result: number;
};

export default function Result({ result, imcParameters }: Props) {
	const indexOfLimitIMC = calculateIndexOfTheImcLimit(result);
	const imcResult = imcTable[indexOfLimitIMC];
	const weightsIdeal = calculateIdealWeightLimitFromIMC(Number(imcParameters.height) / 100, [18.5, 25]);
	const weightNecessaryToGain = weightsIdeal[0] - Number(imcParameters.weight);
	const weightNecessaryToLose = Number(imcParameters.weight) - weightsIdeal[1];

	const [messageForEachPossibleIMCResult, setMessageForEachPossibleIMCResult] =
		useState<JSX.Element | null>(null);

	useEffect(() => {
		if (imcResult.imc <= 16.5) {
			setMessageForEachPossibleIMCResult(<MessageMuchUnderThin weightToGain={weightNecessaryToGain} />);
		} else if (18 <= imcResult.imc && imcResult.imc <= 25) {
			setMessageForEachPossibleIMCResult(<MessageIdealWeight />);
		} else {
			setMessageForEachPossibleIMCResult(<MessageAboveFat weightToLose={weightNecessaryToLose} />);
		}
	}, [imcResult, weightNecessaryToGain, weightNecessaryToLose]);

	return (
		<div className="flex flex-col items-center justify-center mt-4">
			<h2 className="text-2xl italic font-bold underline sm:text-3xl">Seu Resultado!</h2>

			<div className="flex items-center justify-center w-40 h-20 mt-8 rounded-3xl bg-lime-400/80 dark:bg-violet-900/80">
				<h3 className="text-3xl font-semibold sm:text-4xl">{result.toFixed(2)}</h3>
			</div>

			<h2
				className={`${imcResult.color} my-12 text-2xl sm:text-3xl font-extrabold w-11/12 text-center py-8 px-6 max-w-xl rounded-2xl`}>
				{imcResult.description}
			</h2>

			<div className="flex flex-col items-center justify-center w-5/6 p-2 text-xl text-center sm:text-2xl mb-11 rounded-xl bg-red-600/5 dark:bg-red-600/10">
				{messageForEachPossibleIMCResult}
			</div>

			<p className="mb-4 text-lg text-center sm:text-xl">
				Consulte os valores de referência do IMC abaixo. Para mais informações, não deixe de consultar
				seu médico!
			</p>

			<ImcTableComponent />
		</div>
	);
}
