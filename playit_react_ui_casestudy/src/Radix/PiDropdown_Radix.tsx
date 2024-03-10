import {PiSelectProps} from "./PiSelect_Radix";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {ChevronDownIcon} from "@radix-ui/react-icons";
import React from "react";

export default function PiDropdown_Radix(props: PiSelectProps) {
    const {selectedIndex, values, onChange} = {...props};

    const options = values.map(value => {
        return <DropdownMenu.Item className={"hover:bg-pibluehover h-36 outline-none cursor-pointer flex align-middle"} key={value}>
            <div className={"px-2 font-poppins my-auto"}>{value}</div>
        </DropdownMenu.Item>
    });

    return <><DropdownMenu.Root>
        <DropdownMenu.Trigger className={"flex font-poppins box-border w-full px-2 border-2 rounded-full border-solid border-piblue h-36 focus:outline-none"}>
            <span className={"mt-auto mb-auto"}>{values[selectedIndex]}</span>
            <div className={"ml-auto mr-2 mt-auto mb-auto"}>
                <ChevronDownIcon width={20} height={20}/>
            </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
            <DropdownMenu.Content className={"w-264 box-border font-poppins rounded-pi5 mt-2 shadow-lg"}>
                {options}
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root></>
}