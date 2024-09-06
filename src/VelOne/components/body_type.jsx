import Validator from '../validator'

export default function TypeBody( {type, bWidth, children, cWidth, objectStyle, addClassName, addId} ) {
    let adjustWidth = bWidth ? " child_width_adjust" : "";
    bWidth = bWidth || "100%";
    cWidth = cWidth || "100%";
    addId = addId || "";
    addClassName = addClassName || "";
    
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
            <div id={addId} className={displayType+adjustWidth+addClassName} style={objStyle}>
                {children}
            </div>
        );
    }
}