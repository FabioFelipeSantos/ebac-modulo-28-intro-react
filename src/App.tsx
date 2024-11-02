import { useEffect, useState, useRef } from "react";
import Header from "./components/Header.tsx";
import DarkLight from "./components/DarkLight.tsx";
import IMCForm from "./components/Form/IMCForm.tsx";
import changingThemeModeOnHTML from "./utils/changingThemeModeOnHTML.ts";
import gettingIMCFromLocalStorage from "./utils/gettingIMCFromLocalStorage.ts";
import Result from "./components/Result/Result.tsx";
import Footer from "./components/Footer.tsx";

const initialIMCParameters: { height: string; weight: string } = gettingIMCFromLocalStorage();

export default function App() {
	const resultSectionRef = useRef<HTMLDivElement>(null);
	const [colorMode, setColorMode] = useState("dark");
	const [imcParameters, setIMCParameters] = useState(initialIMCParameters);

	const IMCResult: number = Number(imcParameters.weight) / Math.pow(Number(imcParameters.height) / 100, 2);

	useEffect(() => {
		localStorage.theme = colorMode;
		changingThemeModeOnHTML();
	}, [colorMode]);

	function handleScrollAfterSendTheValues() {
		if (resultSectionRef.current) {
			resultSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}
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
				<section className="flex justify-center bg-orange-200 dark:bg-emerald-950 min-h-[65vh]">
					<IMCForm
						imcParameters={imcParameters}
						handleIMCValues={setIMCParameters}
						handleScrollToResult={handleScrollAfterSendTheValues}
					/>
				</section>

				{!Number.isNaN(IMCResult) && (
					<section
						className="min-h-[100vh] flex justify-center bg-orange-200 dark:bg-emerald-950"
						id="result">
						<div
							ref={resultSectionRef}
							className="max-w-5xl w-24/25 scroll-mt-12">
							<Result
								result={IMCResult}
								imcParameters={imcParameters}
							/>
						</div>
					</section>
				)}
			</main>
			<Footer />
		</div>
	);
}
