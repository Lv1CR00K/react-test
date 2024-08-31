import React, { useState } from 'react';
import {IncCount, CurCount} from '../App.jsx'

export default function BtnIcons(props){
    const { title, ocjs, Mar, HW, bRad, bgpa } = props;
    const [checked, setChecked] = useState(false);
    console.log(bgpa);
    
    const ltitle = `icn_${title}`;
    const count = CurCount();

    const handleClick = () => {
        if (ocjs) {
            ocjs();
        }
        toggleIcon();
    }

    const toggleIcon = () => {
        setChecked(prevChecked => !prevChecked);
    };

    const styler = (val) => {
        switch (val) {
            case "m":
                return Mar !== undefined ? `${Mar}px` : '0px';
            case "hw":
                return HW !== undefined ? `${HW}px` : '30px';
            case "bRad":
                return bRad !== undefined ? `${bRad}px` : '0px';
            case "bpga":
                return bgpa !== undefined ? `${bgpa}` : '#3d3d3d';
            default:
                return '';
        }
    }

    const innerDiv = () => {
        if (title.includes("menu")){
            return (<><div></div><div></div><div></div></>);
        }else if (title.includes("pass") || title.includes("mess") || title.includes("prof")){
            return (<><div></div><div></div></>);
        }else if (title.includes("bell")){
            return (
                <svg style={{ '--HW': styler('hw') }} viewBox='0 0 100 100'>
                  <path d='M0 70 L100 70 L100 60 Q80 50 80 30 Q80 0 50 0 Q20 0 20 30 Q20 50 0 60 Z'/>
                  <path d='M35 75 A14 14 0 1 0 65 75 Z'/>
                </svg>
              );              
        }
    }

    return(
        <label className={`label_icon_${title}`} htmlFor={`icon_check_${count}`} onClick={handleClick} style={{ '--mar' : styler('m') }}>
            <input type="checkbox" id={`icon_cross_${count}`} />
            <input type="checkbox" id={`icon_check_${count}`} className={`chk_${title}`} data-value="someValue" />
            <div className={ltitle} style={{ '--HW': styler('hw'), '--bRad': styler('bRad'), '--BGPA': styler('bgpa') }}>
                {/* insert the innerDiv() */}
                {innerDiv()}
                {IncCount()}
            </div>
        </label>
    );
}