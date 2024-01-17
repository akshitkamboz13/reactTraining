import React, { Component } from 'react'
import Goal3 from './components/Goal3/goal3.jsx';
import State3 from './components/Goal3/state3.jsx';
import Event from './components/Goal3/event.jsx'

export default class App extends Component {
  render() {
    this.state = {
      name : "akhil",
    }
    return (
      <div>
        <Goal3 />
        <h3>my name is {this.state.name}</h3>
        <State3 x={this.state.name}/>
        <Event />
      </div>
    )
  }
}
