import { useState } from "react";
import Label from "./Label";
import NumberInput from "./NumberInput";

type Props = {
	handleIMCValues(parameters: { height: number; weight: number }): void;
};

export default function IMCForm({ handleIMCValues }: Props) {
	const [heightValue, setHeightValue] = useState(0);
	const [weightValue, setWeightValue] = useState(0);

	function handleToCalculateButtonClick(event: React.MouseEvent) {
		event.preventDefault();

		handleIMCValues({
			height: heightValue,
			weight: weightValue,
		});
	}

	return (
		<>
			<form className="w-3/4 max-w-2xl p-5">
				<div className="flex flex-col items-center h-full rounded-[52px] dark:bg-neutral-800/70 justify-evenly bg-neutral-500/20">
					<div className="flex flex-col items-center w-full">
						<Label
							labelText="Entre com sua altura em centímetros (cm):"
							inputForElementForLabel="height"
						/>
						<NumberInput
							sendingInputValue={setHeightValue}
							imcParameter="height"
							labelForPointingThisInput="height"
						/>
					</div>
					<div className="flex flex-col items-center w-full">
						<Label
							labelText="Entre com seu peso em quilogramas (kg):"
							inputForElementForLabel="weight"
						/>
						<NumberInput
							sendingInputValue={setWeightValue}
							imcParameter="weight"
							labelForPointingThisInput="weight"
						/>
					</div>
					<a
						href="#result"
						className="flex items-center justify-center w-full">
						<button
							onClick={handleToCalculateButtonClick}
							className="w-4/5 px-8 py-4 text-2xl font-semibold rounded-full bg-lime-400 sm:w-1/2 dark:bg-violet-900 dark:hover:bg-violet-950 hover:bg-lime-500/80"
							type="submit">
							Calcular
						</button>
					</a>
				</div>
			</form>
		</>
	);
}
