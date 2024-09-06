import PropTypes from 'prop-types'
import BtnIcons from '../VelOne/crookwork_icon'

export default function Header({logo, title, itemsAry}){
    return(
        <header className='head-container'>
            <BtnIcons type='menu' HW={28} addClassName=" menuButtonPorPolyo"
            objectStyle={{"--BGP" : "var(--grayBg)", "--BGPA" : "rgb(62, 57, 87)", "--BGCA" : "white", "--BGC": "white"}}/>
            <img src={logo} style={{width : "35px", margin: "5.47px 10px"}}/>
            {itemsAry && (
                <ul className='menuTab'>
                    {itemsAry.map((item, index) => (
                        <li className='btn_underLine' key={index}><a href={`#${item}`}>{item}</a></li>
                    ))}
                </ul>
            )}
        </header>
    );
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string,
    itemsAry: PropTypes.array.isRequired
}