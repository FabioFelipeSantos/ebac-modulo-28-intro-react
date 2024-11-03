import {useState} from "react";
import Label from "./Label";
import NumberInput from "./NumberInput";
import savingLastValuesInLocalStorage from "../../utils/savingLastValuesInLocalStorage";

type Props = {
    imcParameters: { height: string; weight: string };
    handleIMCValues(parameters: { height: string; weight: string }): void;
    handleScrollToResult(): void;
};

export default function IMCForm({imcParameters, handleIMCValues, handleScrollToResult}: Props) {
    const [heightValue, setHeightValue] = useState(imcParameters.height);
    const [weightValue, setWeightValue] = useState(imcParameters.weight);
    const [isValidInputs, setIsValidInputs] = useState(true);

    function handleToCalculateButtonClick(event: React.MouseEvent) {
        event.preventDefault();

        if (heightValue === "0" || heightValue === "") {
            setIsValidInputs(false);
            return
        }

        if (weightValue === "0" || weightValue === "") {
            setIsValidInputs(false);
            return
        }

        setIsValidInputs(true);

        const imc = {
            height: heightValue,
            weight: weightValue,
        };

        handleIMCValues(imc);

        setTimeout(() => {
            handleScrollToResult();
            savingLastValuesInLocalStorage(imc);
        }, 180);
    }

    return (
        <>
            <form className="w-3/4 max-w-2xl p-5 my-8 " >
                <div className="flex flex-col items-center h-full rounded-[52px] dark:bg-neutral-800/70 justify-evenly bg-neutral-500/20" >
                    <div className="flex flex-col items-center w-full" >
                        <Label
                            labelText="Entre com sua altura em centímetros (cm):"
                            inputForElementForLabel="height"
                        />
                        <NumberInput
                            initialInputValue={imcParameters.height}
                            sendingInputValue={setHeightValue}
                            imcParameter="height"
                            labelForPointingThisInput="height"
                            isValidInputs={isValidInputs}
                            handleOnChange={setIsValidInputs}
                        />
                    </div >
                    <div className="flex flex-col items-center w-full" >
                        <Label
                            labelText="Entre com seu peso em quilogramas (kg):"
                            inputForElementForLabel="weight"
                        />
                        <NumberInput
                            initialInputValue={imcParameters.weight}
                            sendingInputValue={setWeightValue}
                            imcParameter="weight"
                            labelForPointingThisInput="weight"
                            isValidInputs={isValidInputs}
                            handleOnChange={setIsValidInputs}
                        />
                    </div >
                    <button
                        onClick={handleToCalculateButtonClick}
                        disabled={!isValidInputs}
                        className=
                            "w-4/5 px-8 py-4 text-2xl font-semibold rounded-full bg-lime-400 sm:w-1/2 dark:bg-violet-900 dark:hover:bg-violet-950 hover:bg-lime-500/80" >
                        Calcular
                    </button >
                </div >
            </form >
        </>
    );
}
