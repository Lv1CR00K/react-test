import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BoxBody from './VelOne/components/box_body.jsx'
import HeadsOne from './VelOne/components/h1.jsx'
import './VelOne/crookwork.css'

export default function App(){
    return (
    <>
        <Header />
        <div className='flex_column' style={{alignItems : "center"}}>
        <BoxBody rad={10} type="BGSha">
            <HeadsOne text="Test the BOX" type="h1"/>
        </BoxBody>
        </div>
        <Footer />
    </>
    );
}
