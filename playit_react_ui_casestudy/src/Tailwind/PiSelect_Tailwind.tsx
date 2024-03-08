import {Menu} from "@headlessui/react";
import {PiSelectProps} from "../Radix/PiSelect_Radix";
import {ArrowDownIcon, ChevronDownIcon} from "@radix-ui/react-icons";
import classNames from "classnames";
export default function PiSelect_Tailwind(props: PiSelectProps) {
    const {onChange, values} = {...props};
    const menuItems = values.map((value, index) => {
        return <Menu.Item>{({active}) => <div className={"hover:bg-pibluehover cursor-pointer my-2 h-36 px-2"}>
            <span className={"inline-block align-middle"}>{value}</span>
        </div>}
        </Menu.Item>;
    });

   return (
        <Menu>
            {({open}) => (
                <>
                    <Menu.Button className={"bg-white w-full box-border h-36 border-2 border-solid border-piblue rounded-3xl focus:outline-none cursor-pointer hover:bg-pibluehover"}>
                        <div className={"w-full px-4 flex justify-center"}>
                            <div className={"flex"}>
                                <span className={"m-auto font-poppins"}>More</span>
                            </div>
                            
                            <div className={classNames({
                                'transition ease-in-out duration-100 ml-auto flex': true,
                                'transform rotate-180': open,
                                'transform rotate-0': !open
                            }) 
                            }>
                                <ChevronDownIcon className={"m-auto"} width={20} height={20}/>
                            </div>
                        </div>
                    </Menu.Button>
                    <Menu.Items className={"absolute z-30 w-264 mt-2 origin-top-right rounded-pi5 bg-white shadow-lg align-middle focus:outline-none bg-white"}>{menuItems}</Menu.Items>
                </>
            )}
        </Menu>
    );
}
