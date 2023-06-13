import 'components/Arrangement/styles.css';
import {Grid} from "assets";

import PropTypes from 'prop-types';

function Arrangement({values, setValues}) {
    function handler(value, event) {
        return {
            'color': () => setValues(prevState => {
                return {...prevState, color: event.target.value}
            }), 'width': () => setValues(prevState => {
                return {...prevState, width: event.target.value}
            }), 'height': () => setValues(prevState => {
                return {...prevState, height: event.target.value}
            }), 'radius': () => setValues(prevState => {
                return {...prevState, radius: event.target.value}
            }), 'transparency': () => setValues(prevState => {
                return {...prevState, transparency: event.target.value}
            }), 'blur': () => setValues(prevState => {
                return {...prevState, blur: event.target.value}
            }), 'outline': () => setValues(prevState => {
                return {...prevState, outline: event.target.value}
            }),
        }[value]();
    }

    return (<div className={'arrangement'}>
        <div className={'upper-area'}>
            <img src={Grid} alt={'grid icon'}/>
        </div>

        <div className={'section'}>
            <h3> Width x Height:
                <span className={'value'}>
                        {values.width.length > 3 ? `(${values.width.slice(0, 3)}...)` : values.width} x {values.height.length > 3 ? `(${values.height.slice(0, 3)}...)` : values.height}
                    </span>
            </h3>
            <div>
                <input
                    type={'number'}
                    value={values.width}
                    onChange={event => handler('width', event)}
                /> x <input
                type={'number'}
                value={values.height}
                onChange={event => handler('height', event)}
            />
            </div>
        </div>

        <div className={'section'}>
            <h3>Color: <span className={'value'}>{values.color}</span></h3>
            <input type={'color'} value={values.color} onChange={event => handler('color', event)}/>
        </div>

        <div className={'section'}>
            <h3> Transparency: <span
                className={'value'}>{values.transparency <= 99 ? `${values.transparency <= 9 ? `0.0${values.transparency}` : `0.${values.transparency}`}` : '1'}</span>
            </h3>
            <input type={'range'} value={values.transparency}
                   onChange={event => handler('transparency', event)}></input>
        </div>

        <div className={'section'}>
            <h3> Blur: <span className={'value'}>{values.blur}</span></h3>
            <input type={'range'} max={20} step={0.1} value={values.blur}
                   onChange={event => handler('blur', event)}></input>
        </div>

        <div className={'section'}>
            <h3> Outline: <span
                className={'value'}>{values.outline <= 99 ? `${values.outline <= 9 ? `0.0${values.outline}` : `0.${values.outline}`}` : '1'}</span>
            </h3>
            <input type={'range'} value={values.outline} onChange={event => handler('outline', event)}></input>
        </div>

        <div className={'section'}>
            <h3> Border Radius: <span className={'value'}>{values.radius}</span></h3>
            <input type={'range'} min={1} max={15} value={values.radius}
                   onChange={event => handler('radius', event)}></input>
        </div>
    </div>)
}

Arrangement.propTypes = {
    values: PropTypes.object, setValues: PropTypes.func
}

export default Arrangement;