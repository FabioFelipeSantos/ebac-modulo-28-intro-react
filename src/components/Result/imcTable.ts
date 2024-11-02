type Table = { imc: number; description: string; color: string }[];

export const imcTable: Table = [
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