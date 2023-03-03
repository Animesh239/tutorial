import React, { useState } from "react";                           // use {useState} for using state

export default function TextForm(props) {
  const [text, setText] = useState("");                       //  format => const[old,new] = useState("statement that will be changed");

  const handleUpClick = (event) => {
    // handleUpClick is for onclick event
    event.preventDefault();                                            // to enable hot load
    // console.log("UpperCase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);                                      // define setText
    props.showAlert("TExt has beeen converted to upper case", "success")   ;                                          
  };

  const handleCopy = (event) => {
    event.preventDefault();
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success")   ; 
  };

  const handlePaste = (event) => {
    event.preventDefault();
    var text = document.getElementById("box");
    navigator.clipboard.readText().then((clipText) => (text.innerText = clipText));
    
  };

  const handleLoClick = (event) => {
    // handleUpClick is for onclick event
    event.preventDefault();                                               // to enable hot load
    // console.log("UpperCase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);           
    props.showAlert("TExt has beeen converted to lower case", "success")   ;                                                // define setText
  };
  const handleOnChange = (event) => {
                                                                               // handleOnChange is for onchnage event //
                                                                               // console.log("On Change");
    setText(event.target.value); //  to make changes in value datatype of textarea
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              {props.heading}
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <h1>{props.heading}</h1>
          <div className="form-floating">
            <textarea
              id="box"
              cols="65"
              // rows="8"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
            Convert to upper case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
            Convert to Lower case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>
            Copy
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handlePaste}>
            Paste
          </button>
        </form>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary </h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes Read</p>
        <h4>The End</h4>
      </div>
    </>
  );
}
