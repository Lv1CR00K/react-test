import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types'

let glIconCount = 0;
export default function BtnIcons(props){
    const { type, ocjs, Mar, HW, bRad, bgpa } = props;
    
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(glIconCount); // State to manage the count
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
          }
      }, []); 
    // useState and useEffect

    const styler = (val) => {
        switch (val) {
            case "m":
                return Mar !== undefined ? `${Mar}px` : '0px';
            case "hw":
                return HW !== undefined ? `${HW}px` : '30px';
            case "bRad":
                return bRad !== undefined ? `${bRad}px` : '0px';
            case "bgpa":
                return bgpa !== undefined ? bgpa : '#3d3d3d';
            default:
                return '';
        }
    }

    // CHECKING IF TYPE IS EMPTY
    if (!type){
        console.log(`PLEASE ADD A 'type' PROPS!
            types are ['menu', 'pass', 'mess', 'prof', 'bell']`);
    }else {
        const innerDiv = () => {
            let p1 = "", p2 = "", p3 = "";
            if(type == "bell"){
                p1 = "M0 70 L100 70 L100 60 Q80 50 80 30 Q80 0 50 0 Q20 0 20 30 Q20 50 0 60 Z";
                p2 = "M30 75 A18 18 0 1 0 70 75 Z";
            }else if (type == "menu"){
                p1 = "M10 10";
                p2 = "M10 10";
                p3 = "";
            }

            return(
                <svg style={{ '--HW': styler('hw') }} viewBox='0 0 100 100'>
                    <path d={p1}/>
                    <path d={p2}/>
                    <path d={p3}/>
                </svg>
            );
                
        }

        return(
            <label className={`label_icon_${type}`} htmlFor={`icon_check_${count}`} onClick={handleClick} style={{ '--mar' : styler('m') }}>
                <input type="checkbox" id={`icon_cross_${count}`} />
                <input type="checkbox" id={`icon_check_${count}`} className={`chk_${type}`} data-value="someValue" />
                <div className={`icn_${type}`} style={{ '--HW': styler('hw'), '--bRad': styler('bRad'), '--BGPA': styler('bgpa') }}>
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