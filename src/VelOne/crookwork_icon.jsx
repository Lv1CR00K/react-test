import {IncCount} from '../App.jsx'
import './crookwork.js'

export default function BtnIcons(props){
    const title = props.title;
    const ltitle = "icn_"+title;
    const count = IncCount();

    const handleClick = () => {
        if (props.ocjs) {
            props.ocjs();
        }
        togle_icon(count);
    }

    const styler = (val) => {
        if (val === "m") {
            return props.Mar !== undefined ? `${props.Mar}px` : '0px';
        } else if (val === "hw") {
            return props.HW !== undefined ? `${props.HW}px` : '30px';
        } else if (val === "bRad") {
            return props.bRad !== undefined ? `${props.bRad}px` : '0px';
        } else if (val === "bpga"){
            return props.bgpa !== undefined ? `${props.bgpa}` : '#3d3d3d';
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
            <div className={ltitle} style={{ '--HW': styler('hw'), '--bRad': styler('bRad'), '--BGPA' : styler('bgpa') }}>
                {/* insert the innerDiv() */}
                {innerDiv()}
            </div>
        </label>
    );
}