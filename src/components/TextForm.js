import React, { useState } from 'react';


export default function TextForm(props) {

  const deletClick =()=>{
    setText("")
  }
  const removeExtraSpace =()=>{
    let removeExtraSpace = text.split(/[ ]+/);
    return setText(removeExtraSpace.join(" ")) 
    
  }
  const copyText = ()=>{ 
    navigator.clipboard.writeText(text);
    
  }
  
 


  const uppercaseClick = () => {
    var newText = text.toUpperCase();
    setText(newText)
  }

  const lowercaseClick = () => {
    var newText = text.toLowerCase();
    setText(newText)
  }

  const titlecaseClick = () => {
    const result = text.trim();
    const regexPattern = /\s+/g;
    const s = result.replace(regexPattern, " ");
    const sentence = s.split(" ");
    console.dir(sentence.length);

    for(let i = 0; i < sentence.length; i++){
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      
    } 
    return setText(sentence.join(" "))
  }




  const handleOnChange = (e) => {


    setText(e.target.value)

  }

  const textLength = () => {
    var result = text.trim();
    var regexPattern = /\s+/g;
    var s = result.replace(regexPattern, " ");
   
    return s.split(" ").length;
    

  

  }
 

  const [text, setText] = useState("");
  // setText("hello");
  return (
    <>
      <div >
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea className="form-control"  value={text} placeholder='Enter Your Text Here' onChange={handleOnChange} rows="8"></textarea>

          <button className="btn btn-primary my-3 mx-2" onClick={uppercaseClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={lowercaseClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={titlecaseClick}>Convert to titlecase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpace}>Remove extra space</button>
          <button className="btn btn-primary my-3 mx-2" onClick={copyText} >Copy Text</button>
          <button className="btn btn-primary my-3 mx-2" onClick={deletClick}>Clear</button>
         
        </div>

      </div>
      <div className="textSummery my-3">
        <h1>Your Text Summary </h1>
        
        <p>{text.trimEnd().length} characters  and {textLength()}  words </p>
        <p>{0.008 * textLength()} minutes read </p>
        <h3>Preview</h3>
        <p>{text}</p>


      </div>
    </>


  )
}
