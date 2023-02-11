import React, { useState } from 'react'

const TextForm = (props) => {
  const [text,setText] = useState("");

  const change = (e)=>{
    setText(e.target.value);
  }

  const clickUp = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase !!!!","success");
  }

  const clickLo = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase !!!!","success");
  }

  const Speak = ()=>{
    let voice = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(voice);
  }

  const Space = ()=>{
    let space = text.split(" ").filter(word => word).join(" ");
    setText(space);
    props.showAlert("Removed the Extra Spaces !!!!","success");
  }

  const Copy = ()=>{
    navigator.clipboard.writeText(text).then(()=>{
      props.showAlert("Copied the Text !!!!","success");
    }, ()=>{
      props.showAlert("Failed to copy the Text","danger");
    })
  }

  const Clear = ()=>{
    setText("");
    props.showAlert("Clear the Text !!!!","success");
  }

  return (
    <div className='container my-3'>
      <h1 className='text-center'>Type your Text here and Analyze them</h1>
      <div className="mb-3 my-4">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Enter your Text' value={text} onChange={change}></textarea>
      </div>
      <div className='text-center'>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={clickUp}>Uppercase</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={clickLo}>Lowercase</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Speak}>Text to Speech</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Space}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Copy}>Copy Text</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Clear}>Clear Text</button>
      </div>
      <div>
        <h2>Word Summary</h2>
        <p>No of Words : <b>{text.split(/\s+/).filter((word) => word.length !== 0).length}</b> and No of Characters : <b>{text.trim().length}</b></p>
        <p>Minutes required to Read : <b>{0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length}</b></p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Nothing to Preview !!!" : text}</p>
      </div>
    </div>
  )
}

export default TextForm