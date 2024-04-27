import React from 'react'

const ControlBar = ({ changeColor }) => {
    return (
        <>
            <div className="bar">
                <button className="red" onClick={changeColor} value="red">Red</button>
                <button className="black" onClick={changeColor} value="black">Black</button>
                <button className="blue" onClick={changeColor} value="blue">Blue</button>
                <button className="green" onClick={changeColor} value="green">Green</button>
            </div>
        </>
    )
}

export default ControlBar
