import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BoxBody from './VelOne/components/box_body.jsx'
import HeadsOne from './VelOne/components/h1.jsx'
import './VelOne/crookwork.css'

export default function App(){
    const h1Texting = "MAGLABA KA NA!!!!!!!!!!!!!!!!!!";
    return (
    <>
        <Header />
        <div className='flex_column' style={{alignItems : "center"}}>
            <BoxBody rad={10}>
                <HeadsOne text={h1Texting}/>
            </BoxBody>
            <BoxBody rad={10} type="BorBG">
                <HeadsOne text={h1Texting}/>
            </BoxBody>
            <BoxBody rad={10} type="BorBGSha">
                <HeadsOne text={h1Texting}/>
            </BoxBody>
            <BoxBody rad={10} type="BG">
                <HeadsOne text={h1Texting}/>
            </BoxBody>
            <BoxBody rad={10} type="BGSha">
                <HeadsOne text={h1Texting}/>
            </BoxBody>
        </div>
        <Footer />
    </>
    );
}
