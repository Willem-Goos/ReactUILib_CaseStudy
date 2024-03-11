import React, {useState} from 'react';
import './App.css';
import PiSelect_Radix from "./Radix/PiSelect_Radix";
import PiSelect_Tailwind from "./Tailwind/PiSelect_Tailwind";
import PiCard from "./Tailwind/PiCard";
import PiDropdown_Radix from "./Radix/PiDropdown_Radix";
import Daisy_Dropdown from "./DaisyUI/Daisy_Dropdown";

function App() {

    const values = ["Option 1", "Option 2", "Option 3"];
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
        <>
            <div className="flex gap-4 p-5">
                <PiCard>
                    <h2 className={"font-poppins font-bold mb-5"}>Tailwind + Headless UI</h2>
                    <div className={"w-264"}>
                        <PiSelect_Tailwind selectedIndex={selectedIndex} values={values} onChange={setSelectedIndex}/>
                    </div>
                    <p className={"absolute text-xs bottom-0 mb-2 italic font-poppins"}>TODO: popover meer dynamisch sizeable maken. werkt nu op hardcoded 264px</p>
                </PiCard>
                <PiCard>
                    <h2 className={"font-poppins font-bold mb-5"}>Radix Select + Regular CSS</h2>
                    <div className={"w-264"}>
                        <PiSelect_Radix selectedIndex={selectedIndex} values={values} onChange={setSelectedIndex}/>
                    </div>
                    <p className={"absolute text-xs bottom-0 mb-2 italic font-poppins"}></p>
                </PiCard>
                <PiCard>
                    <h2 className={"font-poppins font-bold mb-5"}>Radix Dropdown + Tailwind CSS</h2>
                    <div className={"w-264"}>
                        <PiDropdown_Radix selectedIndex={selectedIndex} values={values} onChange={setSelectedIndex}/>
                    </div>
                    <span>test</span>
                    <p className={"absolute text-xs bottom-0 mb-2 italic font-poppins"}></p>
                </PiCard>
                <PiCard>
                    <h2 className={"font-poppins font-bold mb-5"}>Daisy UI (Tailwind lib)</h2>
                    <div className={"w-264"}>
                        <Daisy_Dropdown selectedIndex={selectedIndex} values={values} onChange={setSelectedIndex}/>
                    </div>
                    <span>test</span>
                    <p className={"absolute text-xs bottom-0 mb-2 italic font-poppins"}></p>
                </PiCard>

            </div>
        </>

    );
}

export default App;
