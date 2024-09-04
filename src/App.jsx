import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BoxBody from './VelOne/components/box_body.jsx'
import HeadsOne from './VelOne/components/h1.jsx'
import TypeBody from './VelOne/components/body_type.jsx'
import './VelOne/crookwork.css'

const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, maxime, a quae, ad assumenda quidem nulla repellendus sequi consequuntur dolorum iste unde dolores distinctio similique deleniti officia dicta asperiores reiciendis?";
const defTitle = "SOMETHING SOMETHING";
export default function App(){
    return (
    <>
        <Header />
        <TypeBody type="fcol" childAdj={"900px"}>
            {/* PROFILE INTRODUCE */}
            <BoxBody rad={10} type="BGSha">
                <div className='flexRowInside'>
                    <div className="flexColInside">
                        <HeadsOne text="Hello, I'm Jean Cyrus L. Pakingan!" pad="20px 10px 0px 10px" type="h1" />
                        <br/>
                        <HeadsOne text={defText+defText+defText} type="h3" clr="#b3b3b3"/>
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img className='pfp_pic' src='pfp.JPG'/>
                    </div>
                </div>
            </BoxBody>

            <BoxBody rad={10} type="BGSha">
                <HeadsOne text="Work Experience" type="h1"/>
                <br/>
                <HeadsOne text="LTO Bacoor District Office - (3Months)" type="h2" pad="10px 10px 0px 10px"/>
                <HeadsOne text={defText+defText} type="h3" clr="#b3b3b3" pad="0px 10px 10px 10px"/>
            </BoxBody>
            <BoxBody rad={10} type="BGSha">
                
            </BoxBody>
        </TypeBody>
        <Footer />
    </>
    );
}
