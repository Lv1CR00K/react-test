import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types'
import Validator from './validator.jsx'

let glIconCount = 0;
export default function BtnIcons({ type, ocjs, Mar, HW, bRad, bgpa, addClassName, objectStyle}){
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
            }else if (type.includes("prof")){
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
            }else if (type.includes("at")){
                p1 = "M30 50 A1 1 0 1 1 70 50 A1 1 0 1 1 30 50 L40 50 A1 1 0 1 0 60 50 A1 1 0 1 0 40 50";
                p2 = "M70 50A1 1 0 1 0 85 50 A35 35 0 1 0 75 75 A1 1 0 1 1 80 85 Q65 95 50 95 Q8 92 5 50 A1 1 0 1 1 95 50 A1 1 0 1 1 60 50";
                p3 = "";
            }else if (type.includes("left")){
                p1 = "";
                p2 = "";
                p3 = "";
            }else if (type.includes("top")){
                p1 = "";
                p2 = "";
                p3 = "";
            }else if (type.includes("right")){
                p1 = "";
                p2 = "";
                p3 = "";
            }else if (type.includes("bottom")){
                p1 = "";
                p2 = "";
                p3 = "";
            }else if (type.includes("book")){
                p1 = "";
                p2 = "";
                p3 = "";
            }else if (type.includes("react")){
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
            <label className={`label_icon_${type}${addClassName}`} htmlFor={`icon_check_${count}`} onClick={handleClick} style={Mar}>
                <input type="checkbox" id={`icon_check_${count}`} className={`chk_${type}`} data-value="someValue" />
                <div className={`icn_${type}`} style={objectStyle}>
                    {/* insert the innerDiv() */}
                    {innerDiv()}
                </div>
            </label>
        );
    }
    // CHECKING IF TYPE IS EMPTY
}

BtnIcons.propTypes = {
    type: PropTypes.string.isRequired,
    ocjs: PropTypes.func,
}