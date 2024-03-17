import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.ShowAlert("dark mode enabled" , "sucess")

    }
  const handleloclick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.ShowAlert("dark mode enabled" , "sucess")

    }
    
    const handleonchange= (event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // text = ("new text"); //wrong way to change the state
    // setText = ("new text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div clasName="mb-3">
   <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', Color:props.mode==='dark'?'white':'black'}}  id="myBox"  rows="8" ></textarea>
  </div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to LOwercase</button>
    </div>
    <div className="container my-3" style={{Color:props.mode==='dark'?'grey':'white'}}>
      <h1>Your Text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
    <p>{ 0.008*text.split(" ").length} Minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}