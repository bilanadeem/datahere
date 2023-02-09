import React, { useState } from 'react';
//state
export default function TextForm
    (props) {
    const handleUpClick = () => {
        //console.log("was clicked handleUpClick" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        //console.log("was clicked handleUpClick" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("was clicked handleOnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to lowercase</button>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            </div>
            <div className="container my-3">
                <h1>this is Summary</h1>
                <p>{text.split(" ").length} words , and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} read minutes</p>
            </div>
            <h2>Preview</h2>

            <p>{text}</p>
        </>
    )
}


