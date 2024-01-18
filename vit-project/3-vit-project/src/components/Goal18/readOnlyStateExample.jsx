import React from 'react'

function readOnlyStateExample() {
    const [myobj,setMyobj]=React.useState({
        name : "mega",
        age : 34,
        city : "karnal",
        email : "mega@mega.mega"
    })
    function cccc(){
            const nn = document.getElementById("nn").value;
            const aa = document.getElementById("aa").value;
            const ee = document.getElementById("ee").value;
            const cc = document.getElementById("cc").value;
            setMyobj({
                name:nn,
                age:aa,
                city:cc,
                email:ee
    })
}
    
  return (
    <div>
      <p>Name: {myobj.name}</p>
      <p>Age: {myobj.age}</p>
      <p>Email: {myobj.email}</p>
      <p>City: {myobj.city}</p>
      
      <input type="text" value={myobj.name} id='nn' onChange={e=>setMyobj({...myobj, name: e.target.value})}/>
      <input type="number" value={myobj.age} id='aa' onChange={e=>setMyobj(e.target.value)}/>
      <input type="email" value={myobj.email} id='ee' onChange={e=>setMyobj(e.target.value)}/>
      <input type="text" value={myobj.city} id='cc' onChange={e=>setMyobj(e.target.value)}/>
      <button onClick={cccc}>click here</button>
      

    </div>
  )
}

export default readOnlyStateExample
