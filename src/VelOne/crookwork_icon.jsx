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
            }else if (type.includes("prof")){
                p1 = "M50 45 A1 1 0 1 1 50 5 A1 1 0 1 1 50 45";
                p2 = "M10 85 Q50 110 90 85 Q100 60 70 40 Q50 60 30 40 Q0 60 10 85";
                p3 = "";
            }else if (type.includes("home")){
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