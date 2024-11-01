export default function gettingIMCFromLocalStorage() {
	if ("imcParameters" in localStorage) {
		return JSON.parse(localStorage.getItem("imcParameters") as string);
	} else {
		return {
			height: "",
			weight: "",
		};
	}
}
