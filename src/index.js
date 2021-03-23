//import example from './images/example.png'
//import example1 from './images/example1.svg'
import React, { useState } from "react";
import { render } from "react-dom";
import './style/main.scss'

function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));