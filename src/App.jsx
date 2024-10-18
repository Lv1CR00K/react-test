import BtnIcons from './VelOne/crookwork_icon.jsx'
import Validator from './VelOne/validator'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import BoxBody from './VelOne/components/box_body.jsx'
import HeadsOne from './VelOne/components/h1.jsx'
import TypeBody from './VelOne/components/body_type.jsx'
import BBPicHolder from './VelOne/components/body_box_picture_holder.jsx'
import ListCards from './VelOne/components/cards.jsx'
import './VelOne/crookwork.css'
import React, { useState, useEffect} from 'react'

export default function App(){
    const arrayOfIcons = () => {
        const typesOfIcons = ["menu", "mess", "bell", "pass", "left", "top", "right", "bottom", "bookmark", "heart", "setting", "add", "minus", "smallAdd", "smallMinus", "roundAdd", "roundMinus", "play", "pause", "retry", 
            "times", "roundTimes", "search", "blackUser", "user", "twoUsers", "threeUsers", "home", "cale", "dashboard", "send", "trash", "edit", "atEmail", "info", "stats", "chart", "location", "logout", "download",
            "exclamation", "question", "globe", "eye", "comment", "altComment", "telephone"];

        return(
            <>
                {typesOfIcons.map((iconName, iconIndex) => (
                    <TypeBody type="fcol" key={iconIndex}>
                        <BtnIcons type={iconName} Mar={10} HW={35}/>
                    </TypeBody>
                ))}
            </>
        );
    }

    //FOR THE INFORMATIONS!
    const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, maxime, a quae, ad assumenda quidem nulla repellendus sequi consequuntur dolorum iste unde dolores distinctio similique deleniti officia dicta asperiores reiciendis?";
    const myProfile = "Recent graduate of Bachelor's of Science in Information Technology. Skilled in using vanilla CSS, HTML, JS, and PHP with the help of XAMPP. Currently studying React JS and trying to create my own styles, starting with icons using SVG paths.";
    const myContacts = ["telephone/~/09266153663", "telephone/~/0993591749", "atEmail/~/jeanpakingan990@gmail.com",
                        "globe/~/My Facebook/~/https://www.facebook.com/Lvl1Crook/", "globe/~/My Linked In/~/https://www.linkedin.com/in/jean-cyrus-pakingan-a05264323/"];
    const myEducation = ["Senior High School - PMMS Las Piñas/~/Science, Technology, Engineering, and Mathematics (STEM)/~/2018-2020/~/pmms.png", "College - STI College Bacoor/~/Bachelor of Science in Information Technology (BSIT)/~/2020-2024/~/sti.png"];
    const myWorkExperience = ["Full-Stack Developer - Land Transportation Office (LTO) Bacoor District Office/~/Created a file management system in order for a faster file locating within file shelfs, booking system for files, archiving, and more./~/Feb 2024 - May 2024/~/lto.png"];
    const mySoftSkills = "Hello World! ❤️❤️❤️";

    //FOR THE INFORMATIONS!

    //FOR THE REPEAT
    const cardBackground = ["BGSha/~/Background with Shadow", "BG/~/Background", "BorBGSha/~/Background with Border and Shadow", "BorBG/~/Background with Border", "Bor/~/Border"]
    const myEducationSample = ["Junior High Scool - BUES/~/Grade 7 - 10/~/2014-2018/~/bues.png", "Senior High School - PMMS Las Piñas/~/Science, Technology, Engineering, and Mathematics (STEM)/~/2018-2020/~/pmms.png", "College - STI College Bacoor/~/Bachelor of Science in Information Technology (BSIT)/~/2020-2024/~/sti.png"];
    //FOR THE REPEAT

    const aboutMe = () => {
        return(
            <>
                {myContacts.map((contVals, keys) => {
                    const iconValAry = contVals.split("/~/");
                    return(
                        <BoxBody type="Bor" key={keys}>
                            <TypeBody type="frow">
                                <BtnIcons type={iconValAry[0]} Mar={10} HW={25} iconOnly={true} objectStyle={{"--BGC": "white", "--BGP" : "transparent"}}/>
                                {iconValAry[0] == "globe" ? (
                                    (() => {
                                        const linkName = iconValAry[0].replace("_", " ");
                                        return (
                                            <a target='_blank' href={iconValAry[2]} style={{color: "lightblue", padding: "10px", textDecoration: "underline"}}>
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
        if (!window.location.hash) {
            window.location.hash = '#Home';
        }
        setHash(window.location.hash.slice(1).replace(/%20/g, " "));
        const handleHashChange = () => {
            setHash(window.location.hash.slice(1).replace(/%20/g, " "));
        }
        window.addEventListener('hashchange', handleHashChange);
    });

    
    return (
    <>
        <Header logo="./crookwork.png" itemsAry={["Home", "My Styles", "Request"]}/>
        <div className='middle_body'>
            <TypeBody addId="Home" type="fcol" bWidth={"900px"} objectStyle={{padding: "10px 0px 0px 0px", margin: "0px 10px"}}>
            {getHash == "Home" ? (
                <>
                    {/* PROFILE INTRODUCE */}
                    <HeadsOne text="I introduce to you..." type="h3" objectStyle={{textAlign: "center", marginTop: "10px"}}/>
                    <BoxBody type="BGSha">
                        <TypeBody type="frow" addClassName=" profileMedia">
                            <TypeBody type="fcol" objectStyle={{flex: "1", padding: "0px 10px 10px 10px"}}>
                                <HeadsOne text="Jean Cyrus L. Pakingan" type="h1" objectStyle={{textAlign: "center"}}/>
                                <HeadsOne text={myProfile} type="p" objectStyle={{color: "#c7c7c7", fontSize: "18px", padding: "10px 0px"}}/>
                            </TypeBody>
                            <img className='img_pfp' src="pfp.JPG"/>
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="You can contact me through..." type="h3" objectStyle={{textAlign: "center", marginTop: "20px", scrollMarginTop: "60px"}}/>
                    <BoxBody type="BG">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "300px"}}>
                            {aboutMe()}
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="This is my educational background..." type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                    <ListCards BoxBodyType="BGSha" CardType={"List_Pic_1"} infoArray={myEducation}/>

                    <HeadsOne text="Here are my work experience/s..." type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                    <ListCards BoxBodyType="BGSha" CardType={"List_Pic_1"} infoArray={myWorkExperience}/>

                    <HeadsOne text="These are my Hard Skills..." type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
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

                    <HeadsOne text="And my Soft Skills (Personality)..." type="h3" objectStyle={{textAlign: "center", marginTop: "20px"}}/>
                    <BoxBody type="BG">
                        <HeadsOne text={mySoftSkills} type="h3" objectStyle={{color: "#c7c7c7"}}/>
                    </BoxBody>
                </>
            ) : getHash == "My Styles" ? (
                <>
                    <HeadsOne text="Velone Card Background" type="h3" objectStyle={{textAlign: "center"}}/>
                    <BoxBody type="Bor">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "220px"}}>
                            <ListCards BoxBodyType="BGSha" CardType={"Card_1"} infoArray={cardBackground} objectStyle={{height : "100px"}}/>
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="Velone Lists" type="h3" objectStyle={{textAlign: "center"}}/>
                    <BoxBody type="Bor">
                        <HeadsOne text="List Bullet 1" type="h3" objectStyle={{textAlign: "left", margin: "20px 10px 0px 10px", fontSize: "16px"}}/>
                        <ListCards BoxBodyType="BGSha" CardType={"List_Bullet_1"} infoArray={myEducationSample}/>

                        <HeadsOne text="List No Picture 1" type="h3" objectStyle={{textAlign: "left", margin: "20px 10px 0px 10px", fontSize: "16px"}}/>
                        <ListCards BoxBodyType="BGSha" CardType={"List_NoPic_1"} infoArray={myEducationSample}/>

                        <HeadsOne text="List Picture 1" type="h3" objectStyle={{textAlign: "left", margin: "20px 10px 0px 10px", fontSize: "16px"}}/>
                        <ListCards BoxBodyType="BGSha" CardType={"List_Pic_1"} infoArray={myEducationSample}/>
                    </BoxBody>

                    <HeadsOne text="Velone Cards" type="h3" objectStyle={{textAlign: "center"}}/>
                    <BoxBody type="Bor">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "75px"}}>
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="Velone Input Text" type="h3" objectStyle={{textAlign: "center"}}/>
                    <BoxBody type="BG">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "75px"}}>
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="Velone Buttons" type="h3" objectStyle={{textAlign: "center"}}/>
                    <BoxBody type="BG">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "75px"}}>
                        </TypeBody>
                    </BoxBody>

                    <HeadsOne text="VelOne Icons" type="h3" objectStyle={{textAlign: "center"}}/>
                    <BoxBody type="BG">
                        <TypeBody type={"grid"} objectStyle={{"--gMin": "75px"}}>
                            {arrayOfIcons()}
                        </TypeBody>
                    </BoxBody>
                </>
            ) : (
                <>
                </>
            )}
            <div style={{padding: "2.5px"}}></div>
            </TypeBody>
        </div>
        <Footer />
    </>
    );
}
