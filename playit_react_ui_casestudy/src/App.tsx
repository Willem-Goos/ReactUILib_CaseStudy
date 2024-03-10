import React from 'react';
import logo from './logo.svg';
import './App.css';
import PiSelect_Radix from "./Radix/PiSelect_Radix";
import {useState} from "react";
import PiSelect_Tailwind from "./Tailwind/PiSelect_Tailwind";
import PiCard from "./Tailwind/PiCard";
import PiDropdown_Radix from "./Radix/PiDropdown_Radix";

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
                    <h2 className={"font-poppins font-bold mb-5"}>Radix Select (brol)</h2>
                    <div className={"w-264"}>
                        <PiSelect_Radix selectedIndex={selectedIndex} values={values} onChange={setSelectedIndex}/>
                    </div>
                    <p className={"absolute text-xs bottom-0 mb-2 italic font-poppins"}><b>Known issue</b>: Portal werkt niet wanneer radix select niet rechtstreeks onder de body staat. </p>
                </PiCard>
                <PiCard>
                    <h2 className={"font-poppins font-bold mb-5"}>Radix Dropdown + Tailwind css</h2>
                    <div className={"w-264"}>
                        <PiDropdown_Radix selectedIndex={selectedIndex} values={values} onChange={setSelectedIndex}/>
                    </div>
                    <span>test</span>
                    <p className={"absolute text-xs bottom-0 mb-2 italic font-poppins"}></p>
                </PiCard>
            </div>
        </>

    );
}

export default App;
