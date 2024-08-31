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
            <BtnIcons title="menu" Mar="20" />
            <BtnIcons title="pass" Mar="20" bRad="15" bgpa="blue"/>
            <BtnIcons title="mess" Mar="20"  bgpa="yellow"/>
            <BtnIcons title="prof" Mar="20"  bRad="50" bgpa="red"/>
            <BtnIcons title="bell" Mar="20"  bgpa="black" bRad="10"/>
        </div>
    </>
    );
}
