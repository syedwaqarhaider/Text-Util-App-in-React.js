import React, {useState} from  'react'

export default function TextArea(props) {
    const [text, setText]=useState("");
    const convertToUppercase=()=>{
       setText(text.toUpperCase());
     }
     const convertToLowercase=()=>{
        setText(text.toLowerCase());
      }
      const removeExtraSpace=()=>{
        const newText=text.split(/[ ]+/);

        setText(newText.join(" "));
      }
     const onTextAreaChange=(event)=>{
       setText(event.target.value);
    }
    
  return (
      <>
    <div className='container my-3' style={{color: (props.mode==="dark"? "white":"black")}}>
    <h1>{props.heading}</h1> 
    <textarea className="form-control form-control-lg" value={text} onChange={onTextAreaChange} id="myText" rows="8" style={{color: (props.mode==="dark"? "white":"black"), backgroundColor: (props.mode==="dark"? "gray":"white")}}></textarea>   
    <button type="button" className="btn btn-primary my-3" onClick={convertToUppercase}>Convert to Uppercase</button>  
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={convertToLowercase}>Convert to Lowercase</button> 
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={removeExtraSpace}>Remove Extra Spaces</button> 
    </div>
    <div className="container" style={{color: (props.mode==="dark"? "white":"black")}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{(text.split(" ").length)*0.008} minutes read</p>
    </div>
    </>
  )

  
}
