import {PiSelectProps} from "../Radix/PiSelect_Radix";

export default function Daisy_Dropdown(props: PiSelectProps) {

    const {selectedIndex, values, onChange} = props;

    const options = values.map((value, index) => {
        return <li className={"clo"} key={value}>{value}</li>
    });

    return (<div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">Click</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {options}
        </ul>
    </div>);
}