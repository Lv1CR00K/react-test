import './VelOne/crookwork.css'
import BtnIcons from './VelOne/crookwork_icon.jsx'

let icon_counter = 1;
export const IncCount = () => {
    icon_counter+=1;
    return icon_counter;
}

export default function App(){
    // const handleIconClick = () => icon_click("crook", "main");
    return (
    <>
        <h1>Testing for Icons in Crookwork</h1>
        {/* title="_nope" for no animation */}
        <div className='flex_column' style={{ padding : '30px' }}>
            <BtnIcons title="menu" />
            <BtnIcons title="pass" />
            <BtnIcons title="mess" />
            <BtnIcons title="prof" />
        </div>
    </>
    );
}
