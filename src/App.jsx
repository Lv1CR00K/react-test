import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BoxBody from './VelOne/components/box_body.jsx'
import HeadsOne from './VelOne/components/h1.jsx'
import TypeBody from './VelOne/components/body_type.jsx'
import BBPicHolder from './VelOne/components/body_box_picture_holder.jsx'
import './VelOne/crookwork.css'
import React, { useState, useEffect} from 'react'

export default function App(){
    const arrayOfIcons = () => {
        const typesOfIcons = ["menu", "mess", "bell", "pass", "left", "top", "right", "bottom", "bookmark", "heart", "setting", "add", "minus", "smallAdd", "smallMinus", "roundAdd", "roundMinus", "play", "pause", "retry", 
            "times", "roundTimes", "search", "blackUser", "user", "twoUsers", "threeUsers", "home", "cale", "dashboard", "send", "trash", "edit", "atEmail", "info", "stats", "chart", "location", "logout", "download",
            "exclamation", "question", "globe", "eye", "comment", "altComment", "roundCellNumber"];

        return(
            <>
                {typesOfIcons.map((iconName, iconIndex) => (
                    <TypeBody type="fcol" key={iconIndex}>
                        <BtnIcons type={iconName} Mar={10} HW={40}/>
                    </TypeBody>
                ))}
            </>
        );
    }
    const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, maxime, a quae, ad assumenda quidem nulla repellendus sequi consequuntur dolorum iste unde dolores distinctio similique deleniti officia dicta asperiores reiciendis?";
    const myProfile = "Recent graduate with a Bachelor's of Science in Information Technology with extensive knowledge in web development. Skilled in using vanilla CSS, HTML, JS, and PHP with the help of XAMPP. Currently studying React JS and trying to create my own styles, starting with icons using SVG paths.";
    const myContacts = ["roundCellNumber/~/09266153663", "roundCellNumber/~/0993591749", "atEmail/~/jeanpakingan990@gmail.com",
                        "globe/~/FaceBook/~/https://www.facebook.com/Lvl1Crook/", "globe/~/Linked In/~/https://www.linkedin.com/in/jean-cyrus-pakingan-a05264323/"];
    
    const aboutMe = () => {
        return(
            <>
                {myContacts.map((contVals, keys) => {
                    const iconValAry = contVals.split("/~/");
                    return(
                        <BoxBody type="Bor">
                            <TypeBody type="frow">
                                <BtnIcons type={iconValAry[0]} Mar={10} HW={25} iconOnly={true} objectStyle={{"--BGC": "white", "--BGP" : "transparent"}}/>
                                {iconValAry[0] == "globe" ? (
                                    (() => {
                                        const linkName = iconValAry[0].replace("_", " ");
                                        return (
                                            <a href={iconValAry[2]} style={{color: "lightblue", padding: "10px"}}>
                                                {iconValAry[1]}
                                            </a>
                                        );
                                    })()
                                ) : (
                                    <HeadsOne text={iconValAry[1]} type="p" objectStyle={{color: "white", fontSize: "15px", flex: "1"}}>
                                    </HeadsOne>
                                )}
                            </TypeBody>
                        </BoxBody>
                    );
                })}
            </>
        );
    }
    let [getHash, setHash] = useState("");
    useEffect(() => {
        setHash(window.location.hash.slice(1).replace(/%20/g, " "));
        const handleHashChange = () => {
            setHash(window.location.hash.slice(1).replace(/%20/g, " "));
        }
        window.addEventListener('hashchange', handleHashChange);
    });
    return (
    <>
        <Header logo="./crookwork.png" itemsAry={["Home", "My Styles"]}/>
        <div className='middle_body'>
            <TypeBody addId="Home" type="fcol" bWidth={"900px"} objectStyle={{padding: "10px 0px 0px 0px", margin: "0px 10px"}}>
            {getHash !== "My Styles" ? (
                <>
                    {/* PROFILE INTRODUCE */}
                    <BoxBody type="BGSha">
                        <TypeBody type="frow" addClassName=" profileMedia">
                            <TypeBody type="fcol" objectStyle={{flex: "1", padding: "0px 10px 10px 10px"}}>
                                <HeadsOne text="Jean Cyrus L. Pakingan" type="h1" objectStyle={{textAlign: "center"}}/>
                                <HeadsOne text={myProfile} type="p" objectStyle={{color: "#c7c7c7", fontSize: "18px"}}/>
                            </TypeBody>
                            <img className='img_pfp' src="pfp.JPG"/>
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="My Contact and Place?" type="h3" objectStyle={{textAlign: "center", marginTop: "20px", scrollMarginTop: "60px"}}/>
                    <BoxBody type="BG">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "300px"}}>
                            {aboutMe()}
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="Education" type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
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
                </>
            ) : (
                <>
                    <HeadsOne text="VelOne Icons" type="h3" objectStyle={{textAlign: "center"}}/>
                    <BoxBody type="BG">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "75px"}}>
                            {arrayOfIcons()}
                        </TypeBody>
                    </BoxBody>
                </>
            )}
            <div style={{padding: "2.5px"}}></div>
            </TypeBody>
        </div>
        <Footer />
    </>
    );
}
