import { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import DarkLight from "./components/utils/DarkLight.tsx";
import IMCForm from "./components/Form/IMCForm.tsx";

function changingThemeModeOnHTML(): void {
	document.documentElement.classList.toggle(
		"dark",
		localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	);
}

export default function App() {
	const [colorMode, setColorMode] = useState("dark");
	const [imcParameters, setIMCParameters] = useState({
		height: 0,
		weight: 0,
	});

	const IMCResult = imcParameters.weight / Math.pow(imcParameters.height / 100, 2);
	console.log(IMCResult);

	useEffect(() => {
		localStorage.theme = colorMode;
		changingThemeModeOnHTML();
	}, [colorMode]);

	return (
		<div className="min-h-screen text-black dark:text-white bg-slate-200 dark:bg-black/90 font-spectral">
			<header className="flex items-center justify-around h-[35vh] bg-lime-400 dark:bg-violet-900">
				<Header />
				<DarkLight
					color={colorMode}
					handleColorMode={setColorMode}
				/>
			</header>

			<main>
				<section className="flex justify-center mt-8 bg-orange-200 dark:bg-emerald-950 min-h-section bdr-r">
					<IMCForm handleIMCValues={setIMCParameters} />
				</section>

				<section></section>
			</main>
		</div>
	);
}
