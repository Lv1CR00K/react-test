import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BoxBody from './VelOne/components/box_body.jsx'
import HeadsOne from './VelOne/components/h1.jsx'
import TypeBody from './VelOne/components/body_type.jsx'
import BBPicHolder from './VelOne/components/body_box_picture_holder.jsx'
import './VelOne/crookwork.css'

const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, maxime, a quae, ad assumenda quidem nulla repellendus sequi consequuntur dolorum iste unde dolores distinctio similique deleniti officia dicta asperiores reiciendis?";
const defTitle = "SOMETHING SOMETHING";
export default function App(){
    return (
    <>
        <Header logo="./crookwork.png" itemsAry={["About Me", "Experience", "Skills"]}/>
        <div className='middle_body'>
            <TypeBody type="fcol" bWidth={"900px"} objectStyle={{padding: "0px 10px", margin: "0px 10px"}}>
                {/* PROFILE INTRODUCE */}
                <BoxBody rad={10} type="BGSha" objectStyle={{padding: "10px"}}>
                    <TypeBody type="frow" addClassName=" profileMedia">
                        <TypeBody type="fcol" objectStyle={{flex: "1", padding: "0px 10px 10px 10px"}}>
                            <HeadsOne text="Jean Cyrus L. Pakingan" type="h1" objectStyle={{textAlign: "center"}}/>
                            <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7"}}/>
                        </TypeBody>
                        <img className='img_pfp' src="pfp.JPG"/>
                    </TypeBody>
                </BoxBody>

                <HeadsOne text="About Me" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <BoxBody rad={10} type="BGSha" objectStyle={{padding: "10px"}}>
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7"}}/>
                </BoxBody>

                <HeadsOne text="Work Experience" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <BoxBody rad={10} type="BGSha" objectStyle={{padding: "10px"}}>
                    <HeadsOne text="LTO Bacoor District Office - (Jan - May 2024)" type="h2" objectStyle={{textAlign: "left"}}/>
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7", padding: "5px 5px 5px 40px"}}/>
                </BoxBody>

                <HeadsOne text="Hard Skills" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <TypeBody type="grid" objectStyle={{padding: "0px"}}>
                    <BBPicHolder type="BGSha" title="PHP" src="php.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="Javascript" src="js.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="HTML" src="html.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="CSS" src="css.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="XAMPP" src="xampp.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="React JS" src="react.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="C#" src="csharp.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="MySql" src="mysql.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="GitHub" src="github.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="Unity 3D" src="unity.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                    <BBPicHolder type="BGSha" title="Android Studio" src="android.png" objectStyle={{padding: "10px", borderRadius: "10px"}}/>
                </TypeBody>

                <HeadsOne text="Soft Skills" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <BoxBody rad={10} type="BG" objectStyle={{padding: "10px"}}>
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7", padding: "5px 5px 5px 40px"}}/>
                </BoxBody>

                <HeadsOne text="Contacts" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <BoxBody rad={10} type="BG" objectStyle={{padding: "10px"}}>
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7", padding: "5px 5px 5px 40px"}}/>
                </BoxBody>
            </TypeBody>
        </div>
        <Footer />
    </>
    );
}
