import React from 'react';
import Validator from '../validator'
/* <HeadsOne text="hello" type="h1"/> 
<HeadsOne text="hello" type="h2"/> 
<HeadsOne text="hello" type="h3"/> 
<HeadsOne text="hello" type="h4"/> 
<HeadsOne text="hello" type="p"/> */

export default function HeadsOne({type, text, objectStyle, addClassName, addId}) {
    objectStyle = objectStyle || {};
    addId = addId || "";

    const seeType = ["h1", "h2", "h3", "h4", "p"];
    const htType = seeType.indexOf(type) !== -1 && type ? type : "h1";
    const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    
    if(text && (Validator("text", text) || Validator("num", text))){
        return React.createElement(htType, {style: objectStyle, className: addClassName, id: addId}, text);
    }else{
        return React.createElement(htType, {style: objectStyle, className: addClassName, id: addId}, defText);
    }
}