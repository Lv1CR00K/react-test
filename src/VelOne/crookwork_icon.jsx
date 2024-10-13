import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types'
import Validator from './validator.jsx'

let glIconCount = 0;
export default function BtnIcons({ type, ocjs, Mar, HW, bRad, bgpa, addClassName, objectStyle, iconOnly}){
    // ONLY ACCEPTS HEX COLORS!!!!
    // const handleIconClick = () => icon_click("crook", "main");
    /*title="_nope" for no animation
    <BtnIcons type='bell' Mar={10}/>
    <BtnIcons type='menu' Mar={10}/>
    <BtnIcons type='mess' Mar={10}/>
    <BtnIcons type='pass' Mar={10}/>
    <BtnIcons type='prof' Mar={10}/>*/
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(glIconCount);
    const isFirstRender = useRef(true);

    const handleClick = () => {
        
        if (ocjs) {
            ocjs();
        }
        toggleIcon();
    }

    // useState and useEffect
    const toggleIcon = () => {
        setChecked(prevChecked => !prevChecked);
    };
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            glIconCount += 1;
            setCount(glIconCount);
            if(!type){
                console.log(`PLEASE ADD A 'type' PROPS!
                    types are ['menu', 'pass', 'mess', 'prof', 'bell']`);
            }
          }
      }, []); 
    // useState and useEffect

    const styler = (val) => {
        switch (val) {
            case "m":
                return Validator("num", Mar) && Mar? `${Mar}px` : '0px';
            case "hw":
                return Validator("num", HW) && HW ? `${HW}px` : '30px';
            default:
                return "";
        }
    }
    iconOnly = iconOnly || false;
    addClassName = addClassName || "";
    objectStyle = objectStyle || {};
    HW = {'--HW': styler('hw')};
    Mar = {'--mar' : styler('m')};
    objectStyle = {...HW, ...objectStyle};


    // CHECKING IF TYPE IS EMPTY
    if (type){
        const innerDiv = () => {
            let p1 = "", p2 = "", p3 = "";
            /* switch(true){
                case type.includes("bell"):
                    p1 = "M0 70 L100 70 L100 60 Q80 50 80 30 Q80 0 50 0 Q20 0 20 30 Q20 50 0 60 Z";
                    p2 = "M30 75 A18 18 0 1 0 70 75 Z";
                    break;
                case type.includes("menu"):
                    p1 = "M10 12 L90 12 A2 2 0 1 1 90 30 L10 30 A2 2 0 1 1 10 12";
                    p2 = "M10 41 L90 41 A2 2 0 1 1 90 59 L10 59 A2 2 0 1 1 10 41";
                    p3 = "M10 70 L90 70 A2 2 0 1 1 90 88 L10 88 A2 2 0 1 1 10 70";
                    break;
                case type.includes("mess"):
                    p1 = "M15 15 L85 15 Q95 16 95 25 L95 30 L50 45 L5 30 L5 25 Q5 16 15 15";
                    p2 = "M5 35 L50 50 L95 35 L95 75 Q95 85 85 85 L15 85 Q5 85 5 75 L5 35";
                    p3 = "M10 16 L10 80 L90 80 L90 16 L85 16 L85 85 L15 85 L15 16";
                    break;
                case type.includes("pass"):
                    p1 = "M15 45 A1 1 0 1 1 85 45 L75 45 A1 1 0 1 0 25 45";
                    p2 = "M20 40 L80 40 Q90 40 90 50 L90 80 Q90 90 80 90 L20 90 Q10 90 10 80 L10 50 Q10 40 20 40";
                    break;
                case type.includes("prof"):
                    p1 = "M50 45 A1 1 0 1 1 50 5 A1 1 0 1 1 50 45";
                    p2 = "M10 85 Q50 110 90 85 Q100 60 70 40 Q50 60 30 40 Q0 60 10 85";
                    break;
                case type.includes("home"):
                    p1 = "";
                    p2 = "";
                    p3 = "";
                    break;
                default:
                    p1 = "";
                    p2 = "";
                    p3 = "";
            } */
            
            if(type.includes("bell")){
                p1 = "M0 70 L100 70 L100 60 Q80 50 80 30 Q80 0 50 0 Q20 0 20 30 Q20 50 0 60 Z";
                p2 = "M30 75 A18 18 0 1 0 70 75 Z";
            }else if (type.includes("menu")){
                p1 = "M10 12 L90 12 A2 2 0 1 1 90 30 L10 30 A2 2 0 1 1 10 12";
                p2 = "M10 41 L90 41 A2 2 0 1 1 90 59 L10 59 A2 2 0 1 1 10 41";
                p3 = "M10 70 L90 70 A2 2 0 1 1 90 88 L10 88 A2 2 0 1 1 10 70";
            }else if (type.includes("mess")){
                p1 = "M15 15 L85 15 Q95 16 95 25 L95 30 L50 45 L5 30 L5 25 Q5 16 15 15";
                p2 = "M5 35 L50 50 L95 35 L95 75 Q95 85 85 85 L15 85 Q5 85 5 75 L5 35";
                p3 = "M10 16 L10 80 L90 80 L90 16 L85 16 L85 85 L15 85 L15 16";
            }else if (type.includes("pass")){
                p1 = "M15 45 A1 1 0 1 1 85 45 L75 45 A1 1 0 1 0 25 45";
                p2 = "M20 40 L80 40 Q90 40 90 50 L90 80 Q90 90 80 90 L20 90 Q10 90 10 80 L10 50 Q10 40 20 40";
                p3 = "";
            }else if (type.includes("bookmark")){
                p1 = "M15 5 L85 5 Q95 5 95 15 L95 85 Q95 95 85 95 L50 60 L15 95 Q5 95 5 85 L5 15 Q5 5 15 5";
                p2 = "M15 80 L50 45 L85 80 L85 20 Q85 15 75 15 L20 15 Q15 15 15 20";
                p3 = "";
            }else if (type.includes("heart")){
                p1 = "M5 35 A1 1 0 1 1 50 35 A1 1 0 1 1 95 35 Q95 55 50 95 Q5 55 5 35";
                p2 = "M15 35 A1 1 0 1 1 40 35 A1 1 0 1 0 60 35 A1 1 0 1 1 85 35 Q85 50 50 80 Q15 50 15 35";
                p3 = "";
            }else if (type.includes("blackUser")){
                p1 = "M50 45 A1 1 0 1 1 50 5 A1 1 0 1 1 50 45";
                p2 = "M10 85 Q50 110 90 85 Q100 60 70 40 Q50 60 30 40 Q0 60 10 85";
                p3 = "";
            }else if (type.includes("home")){
                p1 = "M5 45 L42 10 Q50 6 58 10 L95 45 L85 45 L85 85 Q85 95 75 95 L60 95 L60 70 L40 70 L40 95 L25 95 Q15 95 15 85 L15 45";
                p2 = "";
                p3 = "";
            }else if (type.includes("cale")){
                p1 = "M10 60 L90 60 L90 65 L10 65 Z M27 10 A1 1 0 1 1 38 10 L38 20 A1 1 0 1 1 27 20 Z M73 10 A1 1 0 1 0 62 10 L62 20 A1 1 0 1 0 73 20";
                p2 = "M15 20 L25 20 A1 1 0 1 0 40 20 L60 20 A1 1 0 1 0 75 20 L85 20 Q95 20 95 30 L95 85 Q95 95 85 95 L15 95 Q5 95 5 85 L5 30 Q5 20 15 20 L15 85 L85 85 L85 40 L15 40";
                p3 = "M35 30 L35 90 L40 90 L40 30 Z M65 30 L65 90 L60 90 L60 30";
            }else if (type.includes("dashboard")){
                p1 = "M5 15 Q5 5 15 5 L32 5 Q42 5 42 15 L42 32 Q42 42 32 42 L15 42 Q5 42 5 32 L5 15 L15 15 L15 32 L32 32 L32 15 Z M48 15 Q48 5 58 5 L85 5 Q95 5 95 15 L95 32 Q95 42 85 42 L58 42 Q48 42 48 32 L48 15 L58 15 L58 32 L85 32 L85 15";
                p2 = "M5 58 Q5 48 15 48 L42 48 Q52 48 52 58 L52 85 Q52 95 42 95 L15 95 Q5 95 5 85 L5 58 L15 58 L15 85 L42 85 L42 58";
                p3 = "M58 58 Q58 48 68 48 L85 48 Q95 48 95 58 L95 85 Q95 95 85 95 L68 95 Q58 95 58 85 L58 58 L68 58 L68 85 L85 85 L85 58";
            }else if (type.includes("send")){
                p1 = "M5 15 Q5 5 30 15 L85 40 Q110 50 85 60 L30 85 Q5 95 5 85 L10 55 L75 50 L10 45";
                p2 = "";
                p3 = "";
            }else if (type.includes("trash")){
                p1 = "M15 30 A1 1 0 1 1 15 15 L35 15 Q40 5 50 5 Q60 5 65 15 L85 15 A1 1 0 1 1 85 30 L85 85 Q85 95 75 95 L25 95 Q15 95 15 85 L15 30 L25 30 L25 80 Q25 85 35 85 L65 85 Q75 85 75 80 L75 30 Z";
                p2 = "M35 45 A1 1 0 1 1 45 45 L45 70 A1 1 0 1 1 35 70";
                p3 = "M65 45 A1 1 0 1 0 55 45 L55 70 A1 1 0 1 0 65 70";
            }else if (type.includes("edit")){
                p1 = "M15 5 L50 5 A1 1 0 1 1 50 15 L20 15 Q15 15 15 20 L15 80 Q15 85 25 85 L80 85 Q85 85 85 80 L85 45 A1 1 0 1 1 95 45 L95 85 Q95 95 85 95 L15 95 Q5 95 5 85 L5 15 Q5 5 15 5";
                p2 = "M65 15 A1 1 0 1 1 85 35 L45 75 L25 75 25 55";
                p3 = "";
            }else if (type.includes("atEmail")){
                p1 = "M30 50 A1 1 0 1 1 70 50 A1 1 0 1 1 30 50";
                p2 = "M70 50 L70 65 A1 1 0 1 0 90 65 L90 50 A1 1 0 1 0 10 50 Q12 88 50 90 Q55 90 65 88";
                p3 = "";
            }else if (type.includes("left")){
                p1 = "M65 10 L25 50 L65 90";
                p2 = "";
                p3 = "";
            }else if (type.includes("top")){
                p1 = "M65 10 L25 50 L65 90";
                p2 = "";
                p3 = "";
            }else if (type.includes("right")){
                p1 = "M65 10 L25 50 L65 90";
                p2 = "";
                p3 = "";
            }else if (type.includes("bottom")){
                p1 = "M65 10 L25 50 L65 90";
                p2 = "";
                p3 = "";
            }else if (type.includes("info")){
                p1 = "M5 50 A1 1 0 1 1 95 50 A1 1 0 1 1 5 50 L15 50 A1 1 0 1 0 85 50 A1 1 0 1 0 15 50";
                p2 = "M50 25 A1 1 0 1 1 50 35 A1 1 0 1 1 50 25";
                p3 = "M45 45 A1 1 0 1 1 55 45 L55 70 A1 1 0 1 1 45 70";
            }else if (type.includes("logout")){
                p1 = "M10 5 L45 5 Q50 5 50 10 L50 30 A1 1 0 1 1 40 30 L40 20 Q40 15 35 15 L20 15 Q15 15 15 20 L15 80 Q15 85 20 85 L35 85 Q40 85 40 80 L40 70 A1 1 0 1 1 50 70 L50 90 Q50 95 45 95 L10 95 Q5 95 5 90 L5 10 Q5 5 10 5";
                p2 = "M30 50 L70 50";
                p3 = "M80 70 L90 50 L80 30";
            }else if (type.includes("download")){
                p1 = "M5 65 A1 1 0 1 1 15 65 L15 80 Q15 85 20 85 L80 85 Q85 85 85 80 L85 65 A1 1 0 1 1 95 65 L95 90 Q95 95 90 95 L10 95 Q5 95 5 90";
                p2 = "M50 75 L75 65 L75 55 L55 62 L55 10 A1 1 0 1 0 45 10 L45 62 L25 55 L25 65";
                p3 = "";
            }else if (type.includes("add")){
                p1 = "M10 50 L90 50";
                p2 = "M50 10 L50 90";
                p3 = "";
            }else if (type.includes("minus")){
                p1 = "M10 50 L90 50";
                p2 = "M50 10 L50 90";
                p3 = "";
            }else if (type.includes("times")){
                p1 = "M10 50 L90 50";
                p2 = "M50 10 L50 90";
                p3 = "";
            }else if (type.includes("smallAdd")){
                p1 = "M25 50 L75 50";
                p2 = "M50 25 L50 75 ";
                p3 = "";
            }else if (type.includes("smallMinus")){
                p1 = "M25 50 L75 50";
                p2 = "M50 25 L50 75 ";
                p3 = "";
            }else if (type.includes("smallTimes")){
                p1 = "M25 50 L75 50";
                p2 = "M50 25 L50 75 ";
                p3 = "";
            }else if (type.includes("roundAdd")){
                p1 = "M25 50 L75 50";
                p2 = "M50 25 L50 75 ";
                p3 = "M5 50 A1 1 0 1 1 95 50 A1 1 0 1 1 5 50";
            }else if (type.includes("roundMinus")){
                p1 = "M25 50 L75 50";
                p2 = "M50 25 L50 75 ";
                p3 = "M5 50 A1 1 0 1 1 95 50 A1 1 0 1 1 5 50";
            }else if (type.includes("roundTimes")){
                p1 = "M25 50 L75 50";
                p2 = "M50 25 L50 75 ";
                p3 = "M5 50 A1 1 0 1 1 95 50 A1 1 0 1 1 5 50";
            }else if (type.includes("search")){
                p1 = "M10 45 A1 1 0 1 1 80 50 A1 1 0 1 1 10 45";
                p2 = "M90 90 L75 75";
                p3 = "";
            }else if (type.includes("location")){
                p1 = "M13 46 A1 1 0 1 1 87 46 Q80 80 50 95 Q20 80 13 46 L23 46 Q29 75 50 83 Q71 75 77 46 A1 1 0 1 0 23 46";
                p2 = "M50 30 A1 1 0 1 1 50 60 A1 1 0 1 1 50 30";
                p3 = "";
            }else if (type.includes("setting")){
                p1 = "M25 50 A1 1 0 1 1 75 50 A1 1 0 1 1 25 50 L35 50 A1 1 0 1 0 65 50 A1 1 0 1 0 35 50";
                p2 = "M45 30 L45 15 A1 1 0 1 1 55 15 L55 30 Z M70 45 L85 45 A1 1 0 1 1 85 55 L70 55 Z M45 70 L45 85 A1 1 0 1 0 55 85 L55 70 Z M30 45 L15 45 A1 1 0 1 0 15 55 L30 55";
                p3 = "M45 30 L45 15 A1 1 0 1 1 55 15 L55 30 Z M70 45 L85 45 A1 1 0 1 1 85 55 L70 55 Z M45 70 L45 85 A1 1 0 1 0 55 85 L55 70 Z M30 45 L15 45 A1 1 0 1 0 15 55 L30 55";
            }else if (type.includes("stats")){
                p1 = "M5 15 A1 1 0 1 1 15 15 L15 75 Q15 85 25 85 L85 85 A1 1 0 1 1 85 95 L15 95 Q5 95 5 85";
                p2 = "M25 70 L25 50 A1 1 0 1 1 35 50 L35 70 A1 1 0 1 1 25 70 Z M45 70 L45 30 A1 1 0 1 1 55 30 L55 70 A1 1 0 1 1 45 70 Z M65 70 L65 40 A1 1 0 1 1 75 40 L75 70 A1 1 0 1 1 65 70";
                p3 = "";
            }else if (type.includes("chart")){
                p1 = "M5 15 A1 1 0 1 1 15 15 L15 75 Q15 85 25 85 L85 85 A1 1 0 1 1 85 95 L15 95 Q5 95 5 85";
                p2 = "M25 40 L45 25 L60 35 L80 18";
                p3 = "M35 70 L35 50 A1 1 0 1 1 45 50 L45 70 A1 1 0 1 1 35 70 Z M55 70 L55 60 A1 1 0 1 1 65 60 L65 70 A1 1 0 1 1 55 70 Z M75 70 L75 40 A1 1 0 1 1 85 40 L85 70 A1 1 0 1 1 75 70";
            }else if (type.includes("user")){
                p1 = "M50 10 A1 1 0 1 1 50 40 A1 1 0 1 1 50 10";
                p2 = "M15 90 A1 1 0 1 1 85 90";
                p3 = "";
            }else if (type.includes("twoUsers")){
                p1 = "M30 25 A1 1 0 1 1 30 50 A1 1 0 1 1 30 25 Z M70 10 A1 1 0 1 1 70 35 A1 1 0 1 1 70 10";
                p2 = "M10 85 A1 1 0 1 1 50 85";
                p3 = "M55 60 Q60 52 70 50 Q90 49 95 70";
            }else if (type.includes("threeUsers")){
                p1 = "M50 40 A1 1 0 1 1 50 50 A1 1 0 1 1 50 40 Z M32 83 A1 1 0 1 1 68 83";
                p2 = "M25 20 A1 1 0 1 1 25 30 A1 1 0 1 1 25 20 Z M10 60 Q15 45 30 45";
                p3 = "M75 20 A1 1 0 1 1 75 30 A1 1 0 1 1 75 20 Z M90 60 Q85 45 70 45";
            }else if (type.includes("exclamation")){
                p1 = "M10 50 A1 1 0 1 1 90 50 A1 1 0 1 1 10 50";
                p2 = "M50 30 L50 60";
                p3 = "M50 72 L50 72";
            }else if (type.includes("question")){
                p1 = "M10 50 A1 1 0 1 1 90 50 A1 1 0 1 1 10 50";
                p2 = "M30 50 Q30 30 50 30 Q70 30 70 45 Q50 49 50 59";
                p3 = "M50 72 L50 72";
            }else if (type.includes("globe")){
                p1 = "M10 50 A1 1 0 1 1 90 50 A1 1 0 1 1 10 50";
                p2 = "M50 10 Q20 50 50 90 Q80 50 50 10";
                p3 = "M10 50 L90 50";
            }else if (type.includes("eye")){
                p1 = "M10 50 Q50 0 90 50 Q50 100 10 50";
                p2 = "M35 50 A1 1 0 1 1 65 50 A1 1 0 1 1 35 50";
                p3 = "";
            }else if (type.includes("comment")){
                p1 = "M10 50 Q10 10 50 10 Q90 10 90 50 L90 90 L50 90 Q10 90 10 50";
                p2 = "M30 40 L50 40";
                p3 = "M30 60 L70 60";
            }else if (type.includes("altComment")){
                p1 = "M10 60 L10 25 Q10 10 25 10 L75 10 Q90 10 90 25 L90 60 Q90 75 70 75 L50 90 L30 75 Q10 75 10 60";
                p2 = "M30 33 L50 33";
                p3 = "M30 55 L70 55";
            }else if (type.includes("play")){
                p1 = "M20 80 L20 20 L85 50 L20 80";
                p2 = "M35 20 L35 80";
                p3 = "M65 20 L65 80";
            }else if (type.includes("pause")){
                p1 = "M20 80 L20 20 L85 50 L20 80";
                p2 = "M35 20 L35 80";
                p3 = "M65 20 L65 80";
            }else if (type.includes("retry")){
                p1 = "M80 50 A1 1 0 1 1 20 50 Q21 21 50 20 Q55 20 60 22";
                p2 = "M60 20 L45 35 L70 30 L67 5";
                p3 = "";
            }else if (type.includes("telephone")){
                p1 = "M10 50 Q10 10 40 10 Q50 25 40 40 Q30 35 30 50 Q30 65 40 60 Q50 75 40 90 Q10 90 10 50";
                p2 = "M60 40 Q75 50 60 60";
                p3 = "M75 25 Q100 50 75 75";
            }else if (type.includes("book")){
                p1 = "";
                p2 = "";
                p3 = "";
            }else{
                p1 = "";
                p2 = "";
                p3 = "";
            }

            return(
                <svg style={HW} viewBox='0 0 100 100'>
                    <path d={p1}/>
                    <path d={p2}/>
                    <path d={p3}/>
                </svg>
            );
                
        }

        return(
            <>
            {iconOnly == false ? (
                <label className={`label_icon_${type}${addClassName}`} htmlFor={`icon_check_${count}`} onClick={handleClick} style={Mar}>
                    <input type="checkbox" id={`icon_check_${count}`} className={`chk_${type}`} data-value="someValue" />
                    <div className={`icn_${type}`} style={objectStyle}>
                        {innerDiv()}
                    </div>
                </label>
            ) : (
                <div className={`icnOnly_${type}`} style={objectStyle}>
                    {innerDiv()}
                </div>
            )}
            </>
        );
    }
    // CHECKING IF TYPE IS EMPTY
}

BtnIcons.propTypes = {
    type: PropTypes.string.isRequired,
    ocjs: PropTypes.func,
}