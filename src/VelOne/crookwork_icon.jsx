import {IncCount} from '../App.jsx'

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
            return props.M !== undefined ? `${props.Mar}px` : '0px';
        } else if (val === "hw") {
            return props.HW !== undefined ? `${props.HW}px` : '30px';
        } else if (val === "bRad") {
            return props.bRad !== undefined ? `${props.bRad}px` : '0px';
        } else if (val === "bpga"){
            return props.bgpa !== undefined ? props.bgpa : '#3d3d3d';
        }
    }

    const innerDiv = () => {
        if (title.includes("menu")){
            return (<><div></div><div></div><div></div></>);
        }else if (title.includes("pass") || title.includes("mess") || title.includes("prof")){
            return (<><div></div><div></div></>);
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