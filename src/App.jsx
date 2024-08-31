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
        <div className='flex_row' style={{ padding : '30px' }}>
            <BtnIcons title="menu" Mar="20px" />
            <BtnIcons title="pass" Mar="20px" />
            <BtnIcons title="mess" Mar="20px" />
            <BtnIcons title="prof" Mar="20px" />
        </div>
    </>
    );
}
