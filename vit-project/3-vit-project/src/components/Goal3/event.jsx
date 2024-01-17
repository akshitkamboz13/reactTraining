// function event() {
//     const check = (chipi)=>{
//         if (chipi<18) {
//             alert("bacha")
//         }
//         else{
//             alert("adult")
//         }
//     }
//     return(        
//         <div>
//             <button onClick={()=>check(14)}>Click me</button>
//         </div>
//     )
// }
// export default event;





import React, { Component } from 'react'
import Counter from './counter';
export default class event extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
            previous : 0
        }
    }
    incree(){
        this.setState({
            previous : this.state.count,
            count : this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        <Counter number={this.state.count}prev={this.state.previous}/>
        <button onClick={this.incree.bind(this)}>total clicks {this.state.count}</button>
        {/* <button onClick={()=>{this.incree()}}>click here {this.state.count}</button> */}
      </div>
    )
  }
}
