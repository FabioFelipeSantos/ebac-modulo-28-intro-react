type Props = {
	labelText: string;
	inputForElementForLabel: string;
};

export default function Label({ labelText, inputForElementForLabel }: Props) {
	return (
		<>
			<label
				className="p-3 mb-2 text-xl text-center sm:text-2xl"
				htmlFor={inputForElementForLabel}>
				{labelText}
			</label>
		</>
	);
}
