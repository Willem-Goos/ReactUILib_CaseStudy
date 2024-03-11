import {PiSelectProps} from "./PiSelect_Radix";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {ChevronDownIcon} from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";

export default function PiDropdown_Radix(props: PiSelectProps) {
    const {selectedIndex, values, onChange} = {...props};
    const [isOpen, setIsOpen] = React.useState(false);

    const options = values.map((value, index) => {
        return <DropdownMenu.Item className={"z-1000 hover:bg-pi-bluehover h-36 outline-none cursor-pointer flex align-middle text-black"} key={value} onClick={() => onChange(index)}>
            <div className={"px-2 font-poppins my-auto"}>{value}</div>
        </DropdownMenu.Item>
    });

    return <DropdownMenu.Root onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger className={"flex font-poppins text-black box-border w-full px-2 border-2 rounded-full border-solid border-pi-blue h-36 focus:outline-none cursor-pointer" +
            " hover:bg-pi-bluehover z-40"}>
            <span className={"my-auto select-none"}>{values[selectedIndex]}</span>
            <div className={classNames({
                "ml-auto mr-2 my-auto": true,
                "transition-transform ease-in-out duration-100": true,
                "transform rotate-180": isOpen,
                "transform rotate-0": !isOpen,
            })}>
                <ChevronDownIcon width={20} height={20}/>
            </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
            <DropdownMenu.Content className={"bg-white w-264 box-border font-poppins rounded-pi5 mt-2 shadow-lg"}>
                {options}
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
        <div className={"rounded-"}></div>
    </DropdownMenu.Root>
}