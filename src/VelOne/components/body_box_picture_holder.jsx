import BoxBody from "./box_body";
import HeadsOne from "./h1";

export default function BBPicHolder({type, objectStyle, title, src}){
    return(
        <BoxBody type={type} objectStyle={objectStyle}>
            <img src={src} style={{aspectRatio: "1/1", borderRadius: "15px"}}/>
            <HeadsOne text={title} type="h4" objectStyle={{textAlign: "center", paddingBottom: "0px"}}/>
        </BoxBody>
    );

}