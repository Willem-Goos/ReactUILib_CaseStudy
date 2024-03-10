import * as Select from '@radix-ui/react-select';
import React, {useEffect, useRef, useState} from "react";
import "./PiSelect_Radix.css";
import {ChevronDownIcon} from "@radix-ui/react-icons";

// src: https://www.radix-ui.com/primitives/docs/components/select

export interface PiSelectProps {
    selectedIndex: number;
    values: string[];
    onChange: (index: number) => void;
}

export default function PiSelect_Radix(props: PiSelectProps) {
    const {selectedIndex, values, onChange} = {...props};
    const [selected, setSelected] = useState<string>("not-set");
    const myDivRef = useRef<HTMLDivElement | null>(null);
    const onValueChanged = (value: string) => {
        var index = values.indexOf(value);
        onChange(index);
    }

    const options = values.map(value => {
            return <Select.Item className={"SelectItem"} key={value} value={value}>
                {value}
            </Select.Item>
        }
    );

    const backup = <div ref={myDivRef}>
        <Select.Root onValueChange={onValueChanged} defaultValue={values[selectedIndex]}>
            <Select.Trigger className="SelectTrigger">
                <Select.Value className={"SelectValue"}>
                    {values[selectedIndex]}
                </Select.Value>
                <Select.Icon className={"SelectIcon"}>
                    <ChevronDownIcon width={20} height={20}/>
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal >
                <Select.Content className="SelectContent">
                    <Select.ScrollUpButton/>
                    <Select.Viewport className="SelectViewport">
                        <div>test</div>
                        <Select.Separator/>
                    </Select.Viewport>
                    <Select.ScrollDownButton/>
                    <Select.Arrow/>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    </div>;
    
    return (
        <div ref={myDivRef}>
            <Select.Root onValueChange={onValueChanged} defaultValue={values[selectedIndex]} >
                <Select.Trigger className="SelectTrigger">
                    <Select.Value className={"SelectValue"}>
                        {values[selectedIndex]}
                    </Select.Value>
                    <Select.Icon className={"SelectIcon"}>
                        <ChevronDownIcon width={20} height={20}/>
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="SelectContent">
                        <Select.ScrollUpButton/>
                        <Select.Viewport className="SelectViewport">
                            {options}                            
                        </Select.Viewport>
                        <Select.ScrollDownButton/>
                        <Select.Arrow/>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );

}