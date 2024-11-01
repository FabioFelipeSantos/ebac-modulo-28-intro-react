import { useState } from "react";

type Props = {
	color: string;
	handleColorMode(value: string): void;
};

export default function DarkLight({ color, handleColorMode }: Props) {
	const [animationOnDark, setAnimation] = useState(color === "light" ? true : false);

	function handleColorClick(colorMode: string): void {
		handleColorMode(colorMode);
		setTimeout(() => setAnimation(color === "dark" ? true : false), 500);
	}
	return (
		<div>
			{color === "dark" ? (
				<button
					onClick={() => handleColorClick("light")}
					className={`flex items-center justify-center size-16 px-2 py-1 text-3xl bg-orange-800 cursor-pointer hover:bg-orange-900/95 rounded-xl ${
						animationOnDark ? " animate-pop-button" : ""
					}`}>
					🔅
				</button>
			) : (
				<button
					onClick={() => handleColorClick("dark")}
					className={`flex items-center justify-center size-16 px-2 py-1 text-4xl bg-blue-800 cursor-pointer hover:bg-blue-900/95 rounded-xl ${
						!animationOnDark ? " animate-pop-button" : ""
					}`}>
					🌙
				</button>
			)}
		</div>
	);
}
