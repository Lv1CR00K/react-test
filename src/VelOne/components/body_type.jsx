import Validator from '../validator'

export default function TypeBody( {type, bWidth, children, cWidth, flexNum, objectStyle, addClassName} ) {
    let flexVal = flexNum && Validator("num", flexNum) ? {flex: flexNum} : "";
    let adjustWidth = bWidth ? " child_width_adjust" : "";
    if(!bWidth){
        bWidth = "100%";
    }if(!cWidth){
        cWidth = "100%";
    }if(!addClassName){
        addClassName = "";
    }
    
    let objStyle = {"--bWidth" : bWidth, "--cWidth" : cWidth,};
    if(objectStyle){
        objStyle = {...objStyle, ...objectStyle};
    }
    if(Validator("text", type)){
        let displayType = "display_type_flex_row";
        switch (type){
            case "frow":
                displayType = "display_type_flex_row";
                break;
            case "frowAdj":
                displayType = "display_type_flex_row flex_adjust";
                break;
            case "fcol":
                displayType = "display_type_flex_column";
                break;
            case "grid":
                displayType = "display_type_grid_column";
                break;
            case "gridAdj":
                displayType = "display_type_grid_column grid_adjust";
                break;
        }
        return(
            <div className={displayType+adjustWidth+addClassName} style={objStyle}>
                {children}
            </div>
        );
    }
}