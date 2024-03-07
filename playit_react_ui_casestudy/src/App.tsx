import React from 'react';
import logo from './logo.svg';
import './App.css';
import PiSelect_Radix from "./Radix/PiSelect_Radix";
import {useState} from "react";

function App() {

    const values = ["Option 1", "Option 2", "Option 3"];
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
        <div className="App">
            <PiSelect_Radix selectedIndex={selectedIndex} values={values}  onChange={setSelectedIndex}/>
        </div>
    );
}

export default App;
