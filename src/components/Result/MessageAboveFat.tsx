import React from "react";

export default function MessageAboveFat({ weightToLose }: { weightToLose: number }): React.ReactNode {
	return (
		<>
			<p className="">Para entrar no peso ideal é necessário que você perca</p>
			<p className="px-10 py-3 my-8 text-2xl font-semibold border rounded-lg bg-sky-100/15 border-zinc-400">
				{weightToLose.toFixed(1)} kg
			</p>
			<p>Fique atento à sua dieta e consulte seu médico!</p>
		</>
	);
}
