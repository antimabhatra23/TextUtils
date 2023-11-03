import React, { useState } from "react";

// We'll pass props
// State is belongs to a component
// Hooks help in using features of class without making class

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };

    const handleLoClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handleClearClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    };

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change useState
    //  setText("new text") // Correct way to change useState
    return (
        <>
            <div className="container"  style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'black'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it"}</p>
            </div>
        </>
    );
}





