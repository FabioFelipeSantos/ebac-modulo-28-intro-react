import React from "react";

type Props = {
	imcParameter: string;
	labelForPointingThisInput: string;
	sendingInputValue(value: number): void;
};

export default function NumberInput({
	imcParameter,
	labelForPointingThisInput,
	sendingInputValue,
}: Props): React.ReactNode {
	function handleGettingInputValue(event: React.ChangeEvent) {
		const inputElement = event.target as HTMLInputElement;
		sendingInputValue(inputElement.value ? inputElement.valueAsNumber : 0);
	}

	return (
		<>
			<input
				onChange={handleGettingInputValue}
				className="w-3/4 px-4 py-3 text-lg text-center sm:text-xl text-zinc-600 sm:4/5 no-spinner-button"
				type="number"
				name={imcParameter}
				id={labelForPointingThisInput}
				min="0"
				placeholder={`${imcParameter === "height" ? "Exemplo: 170 ..." : "Exemplo: 85 ..."}`}
				required
				step={0.001}
			/>
		</>
	);
}
