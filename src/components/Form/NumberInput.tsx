import React, { useState } from "react";

type Props = {
	initialInputValue: string;
	imcParameter: string;
	labelForPointingThisInput: string;
	sendingInputValue(value: string): void;
	isValidInputs: boolean,
	handleOnChange(value: boolean): void;
};

export default function NumberInput({
	initialInputValue,
	imcParameter,
	labelForPointingThisInput,
	sendingInputValue,
	isValidInputs,
	handleOnChange
}: Props): React.ReactNode {
	const [inputValue, setInputValue] = useState(initialInputValue);

	function handleGettingInputValue(event: React.ChangeEvent) {
		const inputElement = event.target as HTMLInputElement & string;
		if (inputElement.value === "0" || inputElement.value === "") {
			setInputValue(inputElement.value);
			handleOnChange(false);
			return;
		}
		handleOnChange(true);

		let inputChangedValue: string = inputElement.value;

		if (inputElement.value.endsWith(",")) {
			inputChangedValue = inputElement.value.replace(",", ".");
		}

		setInputValue(inputChangedValue);

		if (inputChangedValue !== "") {
			sendingInputValue(inputChangedValue);
		}
	}

	return (
		<>
			<input
				onChange={handleGettingInputValue}
				className={`w-3/4 px-4 py-3 text-lg text-center sm:text-xl text-zinc-600 sm:4/5 ${
					!isValidInputs ? "border-2 border-red-600 dark:border-red-400" : ""
				}`}
				type="text"
				value={inputValue}
				name={imcParameter}
				id={labelForPointingThisInput}
				placeholder={inputValue === "" ? "Digite seu valor..." : ""}
				required
				/>
			{!isValidInputs && (
				<span className="text-lg text-red-700 italic w-3/4 text-center mt-1 dark:text-red-400">
					Confira seus valores. Entre somente com números, não deixe o campo vazio ou digite 0.
				</span>
			)}
		</>
	);
}
