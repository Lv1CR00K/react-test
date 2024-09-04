import React from 'react';
import Validator from '../validator'
/* <HeadsOne text="hello" type="h1"/> 
<HeadsOne text="hello" type="h2"/> 
<HeadsOne text="hello" type="h3"/> 
<HeadsOne text="hello" type="h4"/> 
<HeadsOne text="hello" type="p"/> */

export default function HeadsOne({type, text, clr, pad, objectStyle, addClassName}) {
    let txtClr = clr ? {color: clr} : {color: "var(--textColorBlack)"};
    let p = pad ? {padding: pad} : {padding: "var(--pad)"};
    let allStyles = { ...txtClr, ...p };
    if(objectStyle){
        allStyles = { ...txtClr, ...p, ...objectStyle,}
    }if(!addClassName){
        addClassName = "";
    }

    const seeType = ["h1", "h2", "h3", "h4", "p"];
    const htType = seeType.indexOf(type) !== -1 && type ? type : "h1";
    const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    
    if(text && (Validator("text", text) || Validator("num", text))){
        return React.createElement(htType, {style: allStyles, className: addClassName}, text);
    }else{
        return React.createElement(htType, {style: allStyles, className: addClassName}, defText);
    }
}