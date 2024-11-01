import React, { useState } from "react";

type Props = {
	initialInputValue: string;
	imcParameter: string;
	labelForPointingThisInput: string;
	sendingInputValue(value: string): void;
};

export default function NumberInput({
	initialInputValue,
	imcParameter,
	labelForPointingThisInput,
	sendingInputValue,
}: Props): React.ReactNode {
	const [inputValue, setInputValue] = useState(initialInputValue);

	function handleGettingInputValue(event: React.ChangeEvent) {
		const inputElement = event.target as HTMLInputElement;

		setInputValue(inputElement.value);

		if (inputElement.value !== "") {
			sendingInputValue(inputElement.value);
		}
	}

	return (
		<>
			<input
				onChange={handleGettingInputValue}
				className="w-3/4 px-4 py-3 text-lg text-center sm:text-xl text-zinc-600 sm:4/5"
				type="text"
				value={inputValue}
				name={imcParameter}
				id={labelForPointingThisInput}
				placeholder={inputValue === "" ? "Digite seu valor..." : ""}
				required
				step={0.001}
			/>
		</>
	);
}
