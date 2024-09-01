import './VelOne/crookwork.css'
import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator';

export default function App(){
    // const handleIconClick = () => icon_click("crook", "main");
    return (
    <>
        <h1>Testing for Icons in Crookwork</h1>
        <h3>Libre mo ba to Jovs???? Kung libre mo, punta ako kahit mag antay ako isang oras.</h3>
        {/* title="_nope" for no animation */}
        <div className='flex_row' style={{ padding : '30px' }}>
            <BtnIcons type='bell' Mar="10"/>
            <BtnIcons type='menu' Mar="10"/>
            <BtnIcons type='mess' Mar="10"/>
            <BtnIcons type='pass' Mar="10"/>
            <BtnIcons type='prof' Mar="10"/>
        </div>
    </>
    );
}
