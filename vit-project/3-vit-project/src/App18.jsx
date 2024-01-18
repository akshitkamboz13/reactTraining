import React, { Component } from 'react'
import SetSampleExample from './components/Goal18/SetSampleExample'
import ChangeMessage from './components/Goal18/ChangeMessage'
import ReadOnlyStateExample from './components/Goal18/readOnlyStateExample'

export default class App18 extends Component {
  render() {
    return (
      <div>
        <SetSampleExample />
        <ChangeMessage/>
        <ReadOnlyStateExample />
      </div>
    )
  }
}
