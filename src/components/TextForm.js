import React, {useState} from 'react'



export default function TextForm(props) {
    
    const handleUpClick =()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Convered To Uppercase", "success");
    }
    const handleLoClick =()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted To Lowercase", "success");
    }
    const handleOnChange =(event)=>{
                setText(event.target.value);
        
    }
    const handleCopy =() =>{
        
        navigator.clipboard.writeText(text);
        props.showAlert(" Text Is Copied To Clipboard. ", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
        props.showAlert(" Extra Space Are Removed.", "success");
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Is Cleared", "success");
    }
    const [text, setText] = useState('');
    // setText("Wisdom");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black' }}>
        <h1 className=' mb-4'>{props.heading}</h1>
        <div className="mb-3">

            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'  }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>

        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Manage Extra Space</button>
    
    </div>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black' }}>
        <h1>Your Text Summary</h1>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>Words</b>  and {text.length} <b>Characters</b></p>
        <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview."}</p>
    </div>
    </>
  )
}
