import PropTypes from 'prop-types'

export default function Header(props){
    const {logo, title, itemsAry} = props;
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string,
    itemsAry: PropTypes.array.isRequired
}