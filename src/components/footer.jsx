import PropTypes from 'prop-types'
import BtnIcons from '../VelOne/crookwork_icon';

export default function Footer(){
    return(
        <footer>
            <p style={{padding: "15px 10px 5px 10px"}}>Contacts:</p>
            <div style={{width: "150px", display: "flex", padding: "5px"}}>
                <div style={{flex: "1"}}><a target='_blank' href="https://www.facebook.com/Lvl1Crook/"><img style={{height: "50px"}} src='facebook.png' /></a></div>
                <div style={{flex: "1"}}><a target='_blank' href="https://www.linkedin.com/in/jean-cyrus-pakingan-a05264323/"><img style={{height: "50px"}} src='linkedin.png' /></a></div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "15% 85%"}}>
                <BtnIcons type={"globe"} Mar={10} HW={25} iconOnly={true} objectStyle={{"--BGC": "white", "--BGP" : "transparent"}}/>
                <p style={{fontSize: "13px", padding: "5px"}}>jeanpakingan990@gmail.com</p>
                <BtnIcons type={"telephone"} Mar={10} HW={25} iconOnly={true} objectStyle={{"--BGC": "white", "--BGP" : "transparent"}}/>
                <p style={{fontSize: "13px", padding: "5px"}}>09266153663</p>
                <BtnIcons type={"telephone"} Mar={10} HW={25} iconOnly={true} objectStyle={{"--BGC": "white", "--BGP" : "transparent"}}/>
                <p style={{fontSize: "13px", padding: "5px"}}>09935961749</p>
            </div>
            <hr style={{borderWidth: "1px 0px 0px 0px", borderColor: "rgb(139, 135, 158)", width: "100%"}}/>
            <img src="crookwork.png" style={{width: "50px", paddingTop: "20px"}}/>
            <p style={{color: "rgb(255, 255, 255)", fontSize: "15px", padding: "10px 10px 2px 10px"}}>VelOne</p>
            <p style={{color: "grey", fontSize: "12px", padding: "2px 10px 20px 10px"}}>&copy; 2025 Jean Cyrus Pakingan</p>
        </footer>
    );
}