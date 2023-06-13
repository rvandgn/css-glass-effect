import './styles.css';
import {CopyBlock, dracula} from "react-code-blocks";
import PropTypes from 'prop-types';

function Code({code}) {
    return (<div className={'code'}>
        <div className={'upper-area'}>
            Code
        </div>
        <div className={'code-container'}>
            <h3>CSS:</h3>
            <CopyBlock
                text={code}
                language='css'
                theme={dracula}
                codeBlock
            />
        </div>
    </div>)
}

Code.propTypes = {
    code: PropTypes.string, values: PropTypes.object
}

export default Code;