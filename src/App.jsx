import './VelOne/crookwork.css'
import BtnIcons from './VelOne/crookwork_icon.jsx'

export default function App(){
    // const handleIconClick = () => icon_click("crook", "main");
    return (
    <>
        <h1>Testing for Icons in Crookwork</h1>
        {/* title="_nope" for no animation */}
        <div className='flex_row' style={{ padding : '30px' }}>
            <BtnIcons title="menu" Mar="20" />
            <BtnIcons title="pass" Mar="20" bRad="10" bgpa="blue"/>
            <BtnIcons title="mess" Mar="20" bRad="15" bgpa="black"/>
            <BtnIcons title="prof" Mar="20" bRad="20" bgpa="red"/>
            <BtnIcons title="bell" Mar="20" bRad="25" bgpa="violet"/>
        </div>
    </>
    );
}
