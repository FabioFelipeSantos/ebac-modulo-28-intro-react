type IMCParameters = {
	height: string;
	weight: string;
};

export default function savingLastValuesInLocalStorage(imcParameters: IMCParameters) {
	const imcParametersJSON = JSON.stringify(imcParameters);

	localStorage.setItem("imcParameters", imcParametersJSON);
}
