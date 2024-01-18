import React,{useState} from 'react'

function SetSampleExample() {
    const [name,setName]=useState("kamboj");
    const [age,setAge]=useState(9);

  return (
    <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <input type="number" value={age} onChange={e=>setAge(e.target.value)} />
    </div>
  )
}

export default SetSampleExample
