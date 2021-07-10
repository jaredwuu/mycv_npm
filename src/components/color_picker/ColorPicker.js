import React, { useState } from 'react'


const ColorPicker = () => {
    const [redInteval, setRedInteval] = useState(0)
    const [greenInteval, setGreenInteval] = useState(0)
    const [blueInteval, setBlueInteval] = useState(0)
    const [opacity, setOpacity] = useState(0)
    return (
        <div className='container'>
            <div className="row pt-5 ">
                <div className="col s4">
                    <input className='' type="range" defaultValue='0' min="0" max="255" onChange={(event) => setRedInteval(event.target.value)} />
                    <button className='w-full py-3' style={{ cursor: 'default', backgroundColor: `rgb(${redInteval}, 0, 0)`, textAlign: 'center', color: `rgb(${Math.abs(redInteval - 255)}, 0, 0` }}>Red ({redInteval} , 0 , 0)</button>
                </div>
                <div className="col s4">
                    <input type="range" defaultValue='0' min="0" max="255" onChange={(event) => setGreenInteval(event.target.value)} />
                    <button className='w-full py-3' style={{ cursor: 'default', backgroundColor: `rgb(0, ${greenInteval}, 0)`, textAlign: 'center', color: `rgb(0, ${Math.abs(greenInteval - 255)}, 0)` }}>Green (0, {greenInteval}, 0)</button>
                </div>
                <div className="col s4">
                    <input type="range" defaultValue='0' min="0" max="255" onChange={(event) => setBlueInteval(event.target.value)} />
                    <button className='w-full py-3' style={{ cursor: 'default', backgroundColor: `rgb(0, 0, ${blueInteval})`, textAlign: 'center', color: `rgb(0, 0, ${Math.abs(blueInteval - 255)})` }}>Blue (0, 0, {blueInteval})</button>
                </div>
            </div>
            <div className="">
                <button className='w-full py-5 text-3xl' style={{ cursor: 'default', backgroundColor: `rgb(${redInteval}, ${greenInteval}, ${blueInteval})`, textAlign: 'center', color: `rgb(${Math.abs(redInteval - 255)}, ${Math.abs(greenInteval - 255)}, ${Math.abs(blueInteval - 255)})` }}>({redInteval}, {greenInteval}, {blueInteval})</button>
            </div>
            <div className="pt-10">
                <input style={{ background:'linear-gradient(90deg,#000,blue)'}}type="range" defaultValue='0' min="0" max="1" onChange={(event) => setOpacity(event.target.value)} step='0.001' />
                <h1 className='center'>The opacity is: {opacity}</h1>
            </div>

            <input style={{ background: 'linear-gradient(#e66465, #9198e5)'}}type="range" min="-10" max="10"></input>
            <input type="range" min="0" max="3.14" step="any" orient="vertical"/>
            <div className="card" style={{background: "linear-gradient(#e66465, #9198e5);" }}>sada</div>
        </div>
    )
}

export default ColorPicker
