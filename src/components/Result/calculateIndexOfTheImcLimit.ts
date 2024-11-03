import imcTable from "./imcTable";

export default function calculateIndexOfTheImcLimit(resultImc: number): number {
	let indexOfLimitIMC: number = 0;

	for (let i = 0; i < imcTable.length; i++) {
		if (imcTable[i].imc < Math.ceil(resultImc)) {
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

	return indexOfLimitIMC;
}
