import React,{useState} from 'react'

function changeName() {
    const [name,setName]= useState('hello');
  return (
    <div>
      <h1>Name : {name}</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default changeName
