import PropTypes from 'prop-types'

export default function Header({logo, title, itemsAry}){
    return(
        <header>
            <img src="./crookwork.png" style={{width : "40px", margin: "10px"}}/>
        </header>
    );
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string,
    itemsAry: PropTypes.array.isRequired
}