// import "../navbar/navbar.css";

// function Navbar(){
//     return(
        
//     )
// }
// export default navbar;
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div className="App">
        <ul>
            <li>About</li>
            <li>Career</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>
      </div>
    )
  }
}
 