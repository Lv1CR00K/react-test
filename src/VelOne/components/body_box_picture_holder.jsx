import BoxBody from "./box_body";
import HeadsOne from "./h1";

export default function BBPicHolder({type, objectStyle, title, src}){
    objectStyle = objectStyle || null;
    type = type || "BGSha";
    return(
        <BoxBody type={type} objectStyle={objectStyle}>
            {title &&  <HeadsOne text={title} type="h4" objectStyle={{textAlign: "center", marginBottom: "10px",  padding: "0px 0px 10px 0px", borderBottom: "var(--borderValueUnset)"}}/>}
            <img src={src} style={{aspectRatio: "1/1", borderRadius: "15px"}}/>
        </BoxBody>
    );

}