import React from 'react'
import { useEffect } from 'react';

function Home() {
    const [name,setName]=React.useState("")
    console.log("this is for testing remove it later")
    useEffect(()=>{
        console.log("component mounted");
        return(()=>{
            console.log("component unmounted");
        })
    },[name])
    
  return (
    <div>
      Home
    </div>
  )
}

export default Home
