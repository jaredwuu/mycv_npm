import React, { useState } from 'react'
import Dropdown from '../plug-in/Dropdown'
import CustomTextInput from '../plug-in/CustomTextInput'
import { TextField } from '@material-ui/core';

const Projects = () => {


    const [redInteval, setRedInteval] = useState(0)
    const [greenInteval, setGreenInteval] = useState(0)
    const [blueInteval, setBlueInteval] = useState(0)
    const mystyle = {
        color: "red",
        backgroundColor: "DodgerBlue",
        padding: "100px",
        fontFamily: "Arial"
    };
    
    return (
        <div className='container'>
            <Dropdown />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={''} />
            <input type='text' style={{ textDecoration: 'none', border: '2px' }}></input>

            <div className='right text-center'>
                <a href="https://app.testdome.com/cert/4152020f95e6417392bd6dbee52ebe6f" className="testdome-certificate-stamp gold text-center"><span className="testdome-certificate-name">Jiachao Wu</span><span className="testdome-certificate-test-name">React </span><span className="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
            </div>
            <button className={mystyle}>
                Hello
            </button>

            <CustomTextInput />
            <input type="range" id="myRange" nim="0" max="100" />
            <input type="datetime-local"></input>
            <input type="time"></input>
            <input id="typeinp" type="range" min="0" max="255" defaultValue="3" step="1" />
            <input type="range" id="slideRed" min="0" max="255"></input>

            <div className="row">
                <div className="col s4">
                    <input type="range" defaultValue='0' min="0" max="255" onChange={(event) => setRedInteval(event.target.value)} />
                    <button className='w-full py-3' style={{ backgroundColor: `rgb(${redInteval}, 0, 0)`, textAlign: 'center', color: `rgb(${Math.abs(redInteval - 255)}, 0, 0` }}>Red ({redInteval} , 0 , 0)</button>

                </div>
                <div className="col s4">
                    <input type="range" defaultValue='0' min="0" max="255" onChange={(event) => setGreenInteval(event.target.value)} />
                    <button className='w-full py-3' style={{ backgroundColor: `rgb(0, ${greenInteval}, 0)`, textAlign: 'center', color: `rgb(0, ${Math.abs(greenInteval - 255)}, 0)` }}>Green (0, {greenInteval}, 0)</button>

                </div>
                <div className="col s4">
                    <input type="range" defaultValue='0' min="0" max="255" onChange={(event) => setBlueInteval(event.target.value)} />
                    <button className='w-full py-3' style={{ backgroundColor: `rgb(0, 0, ${blueInteval})`, textAlign: 'center', color: `rgb(0, 0, ${Math.abs(blueInteval - 255)})` }}>Blue (0, 0, {blueInteval})</button>
                </div>
            </div>
            <button className='w-full py-5 text-3xl' style={{ backgroundColor: `rgb(${redInteval}, ${greenInteval}, ${blueInteval})`, textAlign: 'center', color: `rgb(${Math.abs(redInteval - 255)}, ${Math.abs(greenInteval - 255)}, ${Math.abs(blueInteval - 255)})` }}>({redInteval}, {greenInteval}, {blueInteval})</button>
        </div>

    )
}

export default Projects
