import React, { Component } from 'react'
import Goal3 from './components/Goal3/goal3.jsx';
import State3 from './components/Goal3/state3.jsx';
import Event from './components/Goal3/event.jsx';
import Counter2 from './components/Goal3/counter2.jsx';
import ChangeName from './components/Goal3/changeName.jsx';

export default class App extends Component {
  render() {
    this.state = {
      name : "akhil"
    }
    return (
      <div>
        <h1>hello</h1>
        <Goal3 />
        <h3>my name is {this.state.name}</h3>
        <State3 x={this.state.name}/>
        <Event />
        <Counter2 />
        <ChangeName />
      </div>
    )
  }
}
