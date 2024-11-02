import React from "react";

export default function MessageMuchUnderThin({ weightToGain }: { weightToGain: number }): React.ReactNode {
	return (
		<>
			<p>Você está em uma região de perigosa magreza. É necessário ganhar: </p>
			<p className="px-10 py-3 my-8 text-2xl font-semibold border rounded-lg bg-sky-100/15 border-zinc-400">
				{weightToGain.toFixed(1)} kg
			</p>
			<p>Fique atento à sua dieta e consulte seu médico!</p>
		</>
	);
}
