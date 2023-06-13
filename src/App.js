import Arrangement from "components/Arrangement";
import {useState} from "react";
import Preview from "components/Preview";
import Code from "components/Code";
import 'assets/styles/styles.css';

function App() {
    const [values, setValues] = useState({
        color: '#FFFFFF', width: 100, height: 100, transparency: 10, blur: 3.3, outline: 9, radius: 5,
    });

    const r = parseInt(values.color.substr(1, 2), 16);
    const g = parseInt(values.color.substr(3, 2), 16);
    const b = parseInt(values.color.substr(5, 2), 16);

    return (<div className={'App'}>
        <Preview values={values}/>
        <Arrangement values={values} setValues={setValues}/>
        <Code code={`.card {
    width: ${values.width}px;
    height: ${values.height}px;
    background-color: rgb(${r}, ${g}, ${b}, ${values.transparency <= 99 ? `${values.transparency <= 9 ? `0.0${values.transparency}` : `0.${values.transparency}`}` : '1'});
    backdrop-filter: blur(${values.blur}px);
    -webkit-backdrop-filter: blur(${values.blur}px);
    border: 2px solid rgb(255, 255, 255, ${values.outline <= 99 ? `${values.outline <= 9 ? `0.0${values.outline}` : `0.${values.outline}`}` : '1'});
    border-radius: ${values.radius}px;
}`}/>
    </div>);
}

export default App;
