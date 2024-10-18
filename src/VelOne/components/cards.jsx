import React from 'react';
import Validator from '../validator'
import HeadsOne from './h1';
import BoxBody from './box_body';

export default function ListCards({BoxBodyType, CardType, infoArray, objectStyle}){
    objectStyle =  objectStyle || null;

    const dividerLi = (key) => {
        if(key !== 0 && CardType.includes("List")){
            return(
                <BoxBody type="BG" objectStyle={{padding: "1px", "--whiteBg" : "var(--grayBg)", margin : "5px"}}></BoxBody>
            );
        }
    }
    
    const typeOfCard = (type, listAry, key) => {
        const listSlice = listAry.split("/~/");
        const pic = listSlice[3] || "unset.jpg";
        switch(type){
            case "List_Bullet_1":
                return(
                    <>
                        <li style={{margin: "5px 10px 2px", textDecoration: "underline", fontSize: "20px"}}>
                        {listSlice[0]}
                        </li>
                        <HeadsOne text={listSlice[1]} type="h4" objectStyle={{color: "white", fontSize: "14px", flex: "1", padding: "2px 10px"}}/>
                        <HeadsOne text={listSlice[2]} type="p" objectStyle={{color:  "#c7c7c7", fontSize: "12px", flex: "1", padding: "2px 10px", fontWeight: "none"}}/>
                    </>
                );
                break;
            case "List_NoPic_1":
                return(
                    <>
                        <HeadsOne text={listSlice[0]} type="h4" objectStyle={{color: "white", fontSize: "16px", flex: "1", padding: "2px 10px", textDecoration: "underline"}}/>
                        <HeadsOne text={listSlice[1]} type="h4" objectStyle={{color: "white", fontSize: "14px", flex: "1", padding: "2px 10px"}}/>
                        <HeadsOne text={listSlice[2]} type="p" objectStyle={{color:  "#c7c7c7", fontSize: "12px", flex: "1", padding: "2px 10px"}}/>
                    </>
                );
                break;
            case "List_Pic_1":
                return(
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={pic} style={{width: "50px",height: "50px", borderRadius: "10px", margin: "10px"}}/>
                        <div style={{flex: "1"}}>
                            <HeadsOne text={listSlice[0]} type="h4" objectStyle={{color: "white", fontSize: "16px", flex: "1", padding: "2px", textDecoration: "underline"}}/>
                            <HeadsOne text={listSlice[1]} type="h4" objectStyle={{color: "white", fontSize: "14px", flex: "1", padding: "2px"}}/>
                            <HeadsOne text={listSlice[2]} type="p" objectStyle={{color:  "#c7c7c7", fontSize: "12px", flex: "1", padding: "2px"}}/>
                        </div>
                    </div>
                    
                );
                break;
            case "Card_1":
                return(
                    <BoxBody type={listSlice[0]} objectStyle={objectStyle}>
                        <HeadsOne text={listSlice[1]} type="h4" objectStyle={{color: "white", fontSize: "16px", flex: "1", padding: "2px",textAlign: "center", justifyContent: "center", display: "flex", alignItems: "center"}}/>
                    </BoxBody>
                );
                break;
            case "Card_2":
                return(
                    <BoxBody type={listSlice[0]} objectStyle={objectStyle}>
                    </BoxBody>
                );
                break;
            case "Card_3":
                return(
                    <BoxBody type={listSlice[0]} objectStyle={objectStyle}>
                    </BoxBody>
                );
                break;
            default:
        }
    }

    const loopScript = () => {
        return(
            <>
                {infoArray.map((list, key) => {
                    return(
                        <div key={key}>
                            {dividerLi(key)}
                            {typeOfCard(CardType, list)}
                        </div>
                    );
                })}
            </>
        )
    }
    const BoxScript = CardType.includes("List") ? (
        <BoxBody type={BoxBodyType} objectStyle={objectStyle}>
            {loopScript()}
        </BoxBody>
    ) : (
        <>
            {loopScript()}
        </>
    )

    return(
        <>
            {BoxScript}
        </>
    );
}