import PropTypes from 'prop-types'
export default function Validator(type, val) {
    let retVal = false;

    const typeValValidator = () => {
        if (type && val) {
            switch (type) {
                case "num":
                    retVal = typeof val === 'number' && !isNaN(val) ? true : false;
                    break;
                case "ary":
                    retVal = Array.isArray(val);
                    break;
                case "col":
                    const colorCheck = [/^#[0-9a-fA-F]{3}$/, /^#[0-9a-fA-F]{6}$/];
                    retVal = colorCheck.some(pattern => pattern.test(val));
                    break;
                default:
                    retVal = false;
            }
        }
        return retVal;
    };

    return typeValValidator();
}

Validator.propTypes = {
    type: PropTypes.string.isRequired,
    val: PropTypes.any.isRequired,
}