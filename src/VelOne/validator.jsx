import PropTypes from 'prop-types'

export default function Validator(props){
    const {type, val} = props;
    const typeValValidator = () => {
        if(type && val){
            switch (type){
                case "num":
                    return !isNaN(val) && typeof val === 'number';
                case "ary":
                    return Array.isArray(val);
                case "col":
                    const colPat = /^#[0-9A-Fa-f]{6}$/i;
                    return colPat.test(val);
                default:
                    return false;
            }
        }
    }
}

Validator.propTypes = {
    type: PropTypes.string.isRequired,
    val: PropTypes.any.isRequired,
}