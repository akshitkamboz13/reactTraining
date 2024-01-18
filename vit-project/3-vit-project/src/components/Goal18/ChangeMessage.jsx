import React from 'react'

function ChangeMessage() {
    const [Message,setMessage]=React.useState("messge");
  return (
    <div>
        <p>this is current messge : {Message}</p>
      <button onClick={()=>{setMessage('hello world')}}>click here</button>
    </div>
  )
}

export default ChangeMessage
