import React, { Component } from 'react'

export default class DynamicComponent extends Component {
  render() {
    let myName = "akshit";
    let obj1 ={
        name : "aman",
        age : 12,
        class : "12th",
        address : "karnal"
    };
        return (
      <div>
        <h3>my name is {myName}</h3>  
        <h3>his brother is {obj1.name} from {obj1.address} who is {obj1.age} yrs old in class {obj1.class}</h3>  
      </div>
    )
  }
}
