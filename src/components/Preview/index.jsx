import './styles.css';
import PropTypes from "prop-types";

function Preview({values}) {
    const r = parseInt(values.color.substr(1, 2), 16);
    const g = parseInt(values.color.substr(3, 2), 16);
    const b = parseInt(values.color.substr(5, 2), 16);
    return (<div className={'preview'}>
        <div className={'upper-area'}>
            Preview
        </div>

        <div className={'element'} style={{
            background: `rgb(${r}, ${g}, ${b}, ${values.transparency <= 99 ? `${values.transparency <= 9 ? `0.0${values.transparency}` : `0.${values.transparency}`}` : '1'}`,
            backdropFilter: `blur(${values.blur}px)`,
            border: `2px solid rgb(255, 255, 255, ${values.outline <= 99 ? `${values.outline <= 9 ? `0.0${values.outline}` : `0.${values.outline}`}` : '1'})`,
            borderRadius: `${values.radius}px`,
        }}>
        </div>
    </div>);
}

Preview.propTypes = {
    values: PropTypes.object,
}

export default Preview;