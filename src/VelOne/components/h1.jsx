import React from 'react';
import Validator from '../validator'

// const h1Texting = "PUKING INA MO FELIX!!!!!!!!!!!!!!!";
// <HeadsOne text="hello" type="h1"/>

export default function HeadsOne({type, text}) {
    const seeType = ["h1", "h2", "h3", "h4", "p"];
    const htType = seeType.indexOf(type) !== -1 && type ? type : "h1";
    const defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    
    if(text && (Validator("text", text) || Validator("num", text))){
        return React.createElement(htType, {}, text);
    }else{
        return React.createElement(htType, {}, defText);
    }
}