export default function calculateIdealWeightLimitFromIMC(height: number, imcIdeal: number[]): number[] {
	return imcIdeal.map((imc) => Math.pow(height, 2) * imc);
}
