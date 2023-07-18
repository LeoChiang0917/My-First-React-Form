import React, { useState } from 'react';
export default function Edit({add}){

const [note, setNote] = useState("")
function noteChange(e){
setNote(e.target.value)   
}

const [email, setEmail] = useState("")
function emailChange(e){
setEmail(e.target.value)   
}

function addItem(){
   add(function(Prevdate){
    return [...Prevdate ,{
       note,
       email 
    }]
   }) 
}


return(
<div>
<h1>My First React Form</h1>
<p>Name:</p>
<input type="text" value={note} onChange={noteChange}></input>
<p>Email:</p>
<input type="email" value={email} onChange={emailChange}></input>
<br/>
<button onClick={addItem}>Submit</button>
</div>
); 
}

