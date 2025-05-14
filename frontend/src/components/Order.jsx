import { useState } from "react"
import { Base } from "./Base"
import { Condiment } from "./Condiment"
import { Container } from "./Container"
import { Counter } from "./Counter"
import { Price } from "./Price"

export const Order = () => {
    // Base flavors with the image heights
    const bases = [
        { name: "Raspberry Slushy", height: "206" },
        { name: "Coco Coffee", height: "190" },
        { name: "Nutty Fruit", height: "210" },
        { name: "Pistachio Delight", height: "206" },
    ]

    // Condiment list 
    const condiments = [
        { name: "Sprinkles", amount: "Fixed" },
        { name: "Toasted Marshmallow", amount: "Fixed" },
        { name: "Toasted Almond Flakes", amount: "Fixed" },
        { name: "Peanut Butter", amount: "Variable" },
        { name: "Oreo Crumbles", amount: "Variable" },
        { name: "Dried Apples", amount: "Fixed" },
        { name: "Dried Mango", amount: "Fixed" },
        { name: "Dried Apricot", amount: "Fixed" },
        { name: "Dried Blueberry", amount: "Fixed" }
    ]

    const STEP_BASE = "base"
    const STEP_CONDIMENT = "condiment"
    const STEP_CONTAINER = "container"
    const STEP_PRICE = "price"
    const [step, setStep] = useState(STEP_BASE)

    const [base, setBase] = useState("")
    const [scoops, setScoops] = useState(1)
    const [condimentCounts, setCondimentCounts] = useState(
        Object.fromEntries(condiments.map(c => [c.name, 0]))
    );

    const [container, setContainer] = useState("")
    const [response, setResponse] = useState(null)

    const selectBase = (base) => {
        setBase(base)
    }

    // Increase condiment count
    const condiIncrement = (condimentName) => {
        setCondimentCounts((prev) => ({
            ...prev, [condimentName]: prev[condimentName] + 1,
        }));
    };

    // Decrease condiment count
    const condiDecrement = (condimentName) => {
        setCondimentCounts((prev) => ({
            ...prev, [condimentName]: prev[condimentName] > 0 ? prev[condimentName] - 1 : 0,
        }));
    };

    // Function to call API
    const placeOrder = async () => {
        const addedCondiments = Object.entries(condimentCounts)
            .map(([condimentName, count]) => ({
                condimentName,
                count
            }))
            .filter(item => item.count > 0);
        const order = {
            base,
            scoops,
            condiments: addedCondiments,
            container,
        };

        try {
            const response = await fetch('http://localhost:8080/calc_price', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });
            const result = await response.json();
            setResponse(result)
            result && setStep(STEP_PRICE)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    };

    //  Function to reset all states to initial values
    const resetOrder = () => {
        setBase("")
        setScoops(1)
        setCondimentCounts(Object.fromEntries(condiments.map(c => [c.name, 0])))
        setContainer("")
        setResponse(null)
        setStep(STEP_BASE)
    }

    // Container types
    const containers = ["Wafer Cone", "Waffle Cone", "Waffle Bowl", "Ice Cream Sandwich Wafers"]

    return (
        <div className="w-[1031px] h-[1050px] bg-[#FFE8B1E5] rounded-[35px] border-3 border-[#D09A5C] shadow-[0_14px_4px_0_#C68051] mx-auto mb-[50px]">
            <div className="w-[1031px] h-[104px] bg-[#FF8C20] rounded-tl-[31px] rounded-tr-[31px] pl-[29px] flex items-center text-[48px] text-white">
                {(step == STEP_BASE) && "Pick your flavor"}
                {(step == STEP_CONDIMENT) && "Pick your condiments"}
                {(step == STEP_CONTAINER) && "Pick your container"}
            </div>

            {(step == STEP_BASE) && <>
                <div className="grid grid-cols-2 gap-x-[97px] gap-y-[21px] mx-auto w-fit mt-[20px]">
                    {bases.map((baseFlavor) => (
                        <button onClick={() => selectBase(baseFlavor.name)} key={baseFlavor.name}>
                            <Base
                                base={baseFlavor.name}
                                height={baseFlavor.height}
                                isSelected={base == baseFlavor.name}
                            />
                        </button>
                    ))}
                </div>
                <div className="flex justify-center items-center m-auto pt-[60px] text-[36px]">
                    <span className="text-[#10C4F6] -mt-[60px] mr-[20px]">Scoops </span>
                    <Counter count={scoops} max={100}
                        onIncrement={() => setScoops(scoops + 1)}
                        onDecrement={() => setScoops(scoops > 1 ? scoops - 1 : 1)} />
                </div>
                <div className="w-[300px] h-[100px] flex justify-center items-center mt-5 mx-auto">
                    <button
                        className="w-[300px] h-[100px] rounded-[128.5px] text-[50px] border border-[#ED8181] bg-[#FF5157] text-white shadow-[0_14px_4px_0_rgba(242,152,155,1)] hover:bg-[#E0484E] transition-colors cursor-pointer"
                        onClick={() => setStep(STEP_CONDIMENT)}>Next</button>
                </div>
            </>}

            {(step == STEP_CONDIMENT) && <>
                <div className="grid grid-cols-3 gap-x-[40px] gap-y-[30px] mx-auto w-fit mt-[10px]">
                    {condiments.map((condiment) => (
                        <div key={condiment.name}>
                            <Condiment condiment={condiment.name} />
                            <Counter count={condimentCounts[condiment.name]} max={condiment.amount == "Fixed" ? 1 : 100}
                                onIncrement={() => condiIncrement(condiment.name)}
                                onDecrement={() => condiDecrement(condiment.name)} />
                        </div>
                    ))}
                </div>
                <div className="w-[300px] h-[100px] flex justify-center items-center mt-5 mx-auto">
                    <button
                        className="w-[300px] h-[100px] rounded-[128.5px] text-[50px] border border-[#ED8181] bg-[#FF5157] text-white shadow-[0_14px_4px_0_rgba(242,152,155,1)] hover:bg-[#E0484E] transition-colors cursor-pointer"
                        onClick={() => setStep(STEP_CONTAINER)}>Next</button>
                </div>
            </>}

            {(step == STEP_CONTAINER) && <>
                <div className="grid grid-cols-2 gap-x-[97px] gap-y-[50px] mx-auto w-fit mt-[56px]">
                    {containers.map((cont) => (
                        <button onClick={() => setContainer(cont)} key={cont}>
                            <Container
                                container={cont}
                                isSelected={cont == container} />
                        </button>
                    ))}
                </div>
                <div className="w-[400px] h-[100px] flex justify-center items-center mt-10 mx-auto">
                    <button
                        className="w-[400px] h-[100px] rounded-[128.5px] text-[50px] border border-[#ED8181] bg-[#FF5157] text-white shadow-[0_14px_4px_0_rgba(242,152,155,1)] hover:bg-[#E0484E] transition-colors cursor-pointer"
                        onClick={() => placeOrder()}>Place Order</button>
                </div>
            </>}

            {(step == STEP_PRICE && response != null) && <>
                <div className="mx-auto w-fit mt-[170px]">
                    <Price response={response} />
                </div>
                <div className="w-[400px] h-[100px] flex justify-center items-center mt-10 mx-auto">
                    <button
                        className="w-[400px] h-[100px] rounded-[128.5px] text-[50px] border border-[#ED8181] bg-[#FF5157] text-white shadow-[0_14px_4px_0_rgba(242,152,155,1)] hover:bg-[#E0484E] transition-colors cursor-pointer"
                        onClick={() => resetOrder()}>Start Again</button>
                </div>
            </>}
        </div>
    )
}