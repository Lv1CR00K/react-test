import Validator from '../validator'

export default function HeadsOne({text}) {
    if(text && (Validator("text", text) || Validator("num", text))){
        return(
            <h1>{text}</h1>
        );
    }else{
        return(
            <h1>Test this shit out!</h1>
        );
    }
}