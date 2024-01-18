import React, { Component } from 'react'
import SetSampleExample from './components/Goal18/SetSampleExample'
import ChangeMessage from './components/Goal18/ChangeMessage'
import ReadOnlyStateExample from './components/Goal18/readOnlyStateExample'
import ExampleStateArray from './components/Goal18/ExampleStateArray'
import Timer from './components/Goal18/Timer'

export default class App18 extends Component {
  render() {
    return (
      <div>
        <SetSampleExample />
        <ChangeMessage/>
        <ReadOnlyStateExample />
        <ExampleStateArray/>
        <Timer />
      </div>
    )
  }
}
