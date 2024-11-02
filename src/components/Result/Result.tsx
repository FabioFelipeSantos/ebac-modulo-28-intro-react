import { useEffect, useState } from "react";
import calculateIdealWeightLimitFromIMC from "../../utils/calculateIdealWeight";
import MessageMuchUnderThin from "./MessageMuchUnderThin";
import MessageIdealWeight from "./MessageIdealWeight";
import MessageAboveFat from "./MessageAboveFat";

type Props = {
	imcParameters: {
		height: string;
		weight: string;
	};
	result: number;
};

type Table = { imc: number; description: string; color: string }[];

const imcTable: Table = [
	{
		imc: 15,
		description: "Extremamente abaixo do peso",
		color: "bg-sky-300/80",
	},
	{
		imc: 16,
		description: "Gravemente abaixo do peso",
		color: "bg-sky-400/80",
	},
	{
		imc: 18.5,
		description: "Abaixo do peso ideal",
		color: "bg-sky-500/80",
	},
	{
		imc: 25,
		description: "Faixa de peso ideal",
		color: "bg-blue-500/80",
	},
	{
		imc: 30,
		description: "Sobrepeso",
		color: "bg-amber-400/80",
	},
	{
		imc: 35,
		description: "Obesidade grau I",
		color: "bg-orange-500/80",
	},
	{
		imc: 40,
		description: "Obesidade grau II (grave)",
		color: "bg-red-600/80",
	},
	{
		imc: 41,
		description: "Obesidade grau III (mórbida)",
		color: "bg-red-700/80",
	},
];

export default function Result({ result, imcParameters }: Props) {
	let indexOfLimitIMC: number = 0;
	for (let i = 0; i < imcTable.length; i++) {
		if (imcTable[i].imc < Math.ceil(result)) {
			if (i !== imcTable.length - 1) {
				continue;
			} else {
				indexOfLimitIMC = i;
			}
		} else {
			indexOfLimitIMC = i;
			break;
		}
	}

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
			<h2 className="text-2xl italic font-bold underline">Seu Resultado!</h2>

			<div className="flex items-center justify-center w-40 h-20 mt-8 rounded-3xl bg-lime-400/80 dark:bg-violet-900/80">
				<h3 className="text-3xl font-semibold">{result.toFixed(2)}</h3>
			</div>

			<h2
				className={`${imcResult.color} my-12 text-2xl font-extrabold w-11/12 text-center py-8 px-6 max-w-xl rounded-2xl`}>
				{imcResult.description}
			</h2>

			<div className="flex flex-col items-center justify-center w-5/6 text-xl text-center mb-11 ">
				{messageForEachPossibleIMCResult}
			</div>

			<p className="mb-4 text-lg text-center">
				Consulte os valores de referência do IMC abaixo. Para mais informações, não deixe de consultar
				seu médico!
			</p>

			<div className="w-5/6">
				{imcTable.map((item, index) => (
					<div
						key={item.imc}
						className={`flex text-lg justify-center items-center w-full ${item.color} h-10`}>
						{index === 0 ? (
							<div className="flex items-center justify-center w-24 gap-2">
								<span className=""></span>
							</div>
						) : (
							<div className="flex items-center justify-center w-24 gap-2">
								<span className="w-12 mr-2 text-right">{imcTable[index - 1].imc}</span>
								<span className="">&#60;</span>
							</div>
						)}

						<span className="text-center w-60">
							<p className="font">{item.description}</p>
						</span>

						{index === 0 ? (
							<div className="flex items-center justify-center w-24 gap-2">
								<span className="">&#60;</span>
								<span className="w-12 ml-2 text-left">{imcTable[index].imc}</span>
							</div>
						) : index === imcTable.length - 1 ? (
							<div className="flex items-center justify-center w-24 gap-2">
								<span className=""></span>
							</div>
						) : (
							<div className="flex items-center justify-center w-24 gap-2">
								<span className="">&#60;</span>
								<span className="w-12 ml-2 text-left">{item.imc}</span>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
