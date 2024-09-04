import Validator from '../validator'

export default function TypeBody( {type, childAdj, children, flexNum} ) {
    let flexVal = flexNum && Validator("num", flexNum) ? {flex: flexNum} : "";
    let adjustWidth = "";
    console.log(flexVal);
    if(childAdj){
        adjustWidth = " child_width_adjust";
    }else{
        childAdj = "100%"
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
            <div className={displayType+adjustWidth} style={{"--cWidth": `${childAdj}`, flexVal}}>
                {children}
            </div>
        );
    }
}