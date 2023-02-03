import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const Change = (event) => {
    setText(event.target.value);
  };

  const Speak = () => {
    const voice = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(voice);
  };

  const Copy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };

  const Clear = () => {
    setText("");
    props.showAlert("The Text has been Cleared Successfully", "success");
  };

  const ClickUp = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("The Text has been Converted to Uppercase Successfully", "success");
  };

  const ClickLo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("The Text has been Converted to Lowercase Successfully", "success");
  };

  const Space = () => {
    let space = text.split(' ').filter(word => word).join(' ');
    setText(space);
  }

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className="text-center mb-4">Type your Text here and Analyze them</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={Change} id="exampleFormControlTextarea1" rows="10" placeholder="Enter your Text"></textarea>
        </div>
        <div className="my-1 text-center">
          <button type="button" disabled={text.length === 0} onClick={ClickUp} className={`btn btn-${props.mode === "dark" ? "light" : "primary"} mx-1 my-1`}>Uppercase</button>
          <button type="button" disabled={text.length === 0} onClick={ClickLo} className={`btn btn-${props.mode === "dark" ? "light" : "primary"} mx-1 my-1`}>Lowercase</button>
          <button type="button" disabled={text.length === 0} onClick={Speak} className={`btn btn-${props.mode === "dark" ? "light" : "primary"} mx-1 my-1`} >Text to Speech </button>
          <button type="button" disabled={text.length === 0} onClick={Space} className={`btn btn-${props.mode === "dark" ? "light" : "primary"} mx-1 my-1`}>Remove Extra Spaces</button>
          <button type="button" disabled={text.length === 0} onClick={Copy} className={`btn btn-${props.mode === "dark" ? "light" : "primary"} mx-1 my-1`} > Copy Text </button>
          <button type="button" disabled={text.length === 0} onClick={Clear} className={`btn btn-${props.mode === "dark" ? "light" : "primary"} mx-1 my-1`}>Clear Text</button>
        </div>
        <div className="my-3">
          <h2>Word Summary</h2>
          <p>No of Words :{" "}<b>{text.split(/\s+/).filter((word) => word.length !== 0).length}</b> and No of Characters : <b>{text.length}</b></p>
          <p>Minutes required to Read : <b>{0.008 * text.split(" ").filter((word) => word.length !== 0).length}</b></p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview !!!"}</p>
        </div> 
      </div>
    </>
  );
}
