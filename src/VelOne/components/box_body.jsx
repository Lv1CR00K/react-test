import Validator from '../validator'
    /* THIS IS THE TYPES!
    <BoxBody rad={10}>
    </BoxBody>
    <BoxBody rad={10} type="BorBG">
    </BoxBody>
    <BoxBody rad={10} type="BorBGSha">
    </BoxBody>
    <BoxBody rad={10} type="BG">
    </BoxBody>
    <BoxBody rad={10} type="BGSha">
    </BoxBody>*/

export default function BoxBody( {type, rad, children, addClassName, objectStyle} ) {
    objectStyle = objectStyle || {"--bRad" : "10px", padding: "10px"};
    addClassName = addClassName || "";
    let boxType = Validator("text", type) && type ? type : "Bor";
    let className = "body_box_border"
    switch (boxType){
        case "BG":
            className = "body_box_bg";
            break;
        case "BGSha":
            className = "body_box_bg_shadow";
            break;
        case "Bor":
            className = "body_box_border";
            break;
        case "BorBG":
            className = "body_box_bg_border";
            break;
        case "BorBGSha":
            className = "body_box_bg_border_shadow";
            break;
        default:
            className = "body_box_border";
    }
    return(
        <div className={className+addClassName} style={objectStyle}>
            {children}
        </div>
    );
}