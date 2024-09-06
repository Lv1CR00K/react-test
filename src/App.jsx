import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BoxBody from './VelOne/components/box_body.jsx'
import HeadsOne from './VelOne/components/h1.jsx'
import TypeBody from './VelOne/components/body_type.jsx'
import BBPicHolder from './VelOne/components/body_box_picture_holder.jsx'
import './VelOne/crookwork.css'

export default function App(){
    const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, maxime, a quae, ad assumenda quidem nulla repellendus sequi consequuntur dolorum iste unde dolores distinctio similique deleniti officia dicta asperiores reiciendis?";
    return (
    <>
        <Header logo="./crookwork.png" itemsAry={["Home", "Contacts", "Request"]}/>
        <div className='middle_body'>
            <TypeBody addId="Home" type="fcol" bWidth={"900px"} objectStyle={{padding: "60px 0px 0px 0px", margin: "0px 10px"}}>
                {/* PROFILE INTRODUCE */}
                <BoxBody type="BGSha">
                    <TypeBody type="frow" addClassName=" profileMedia">
                        <TypeBody type="fcol" objectStyle={{flex: "1", padding: "0px 10px 10px 10px"}}>
                            <HeadsOne text="Jean Cyrus L. Pakingan" type="h1" objectStyle={{textAlign: "center"}}/>
                            <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7"}}/>
                        </TypeBody>
                        <img className='img_pfp' src="pfp.JPG"/>
                    </TypeBody>
                </BoxBody>

                <HeadsOne text="Contacts" addId="Contacts" type="h3" objectStyle={{textAlign: "center", marginTop: "20px", scrollMarginTop: "60px"}}/>
                <BoxBody type="BG">
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7"}}/>
                </BoxBody>

                <HeadsOne text="About Me" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <BoxBody type="BGSha">
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7"}}/>
                </BoxBody>

                <HeadsOne text="Work Experience" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <BoxBody type="BGSha">
                    <HeadsOne text="LTO Bacoor District Office - (Jan - May 2024)" type="h2" objectStyle={{textAlign: "left"}}/>
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7", padding: "5px 5px 5px 40px"}}/>
                </BoxBody>

                <HeadsOne text="Hard Skills" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <TypeBody type="grid" objectStyle={{padding: "0px"}}>
                    <BBPicHolder title="PHP" src="php.png"/>
                    <BBPicHolder title="Javascript" src="js.png"/>
                    <BBPicHolder title="HTML" src="html.png"/>
                    <BBPicHolder title="CSS" src="css.png"/>
                    <BBPicHolder title="React JS" src="react.png"/>
                    <BBPicHolder title="C#" src="csharp.png"/>
                    <BBPicHolder title="MySql" src="mysql.png"/>
                    <BBPicHolder title="GitHub" src="github.png"/>
                    <BBPicHolder title="XAMPP" src="xampp.png"/>
                    <BBPicHolder title="Unity 3D" src="unity.png"/>
                    <BBPicHolder title="Android Studio" src="android.png"/>
                </TypeBody>

                <HeadsOne text="Soft Skills" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                <BoxBody type="BG">
                    <HeadsOne text={defText} type="h3" objectStyle={{color: "#c7c7c7"}}/>
                </BoxBody>
            </TypeBody>
        </div>
        <Footer />
    </>
    );
}
