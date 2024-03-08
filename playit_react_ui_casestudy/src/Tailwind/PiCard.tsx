export default function PiCard(props: { children: JSX.Element[] }) {

    return (<div className="relative bg-white rounded overflow-hidden shadow-lg px-6 py-3 h-264">
            {props.children}
        </div>
    );
}