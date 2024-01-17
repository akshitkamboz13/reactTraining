import React, { Component } from 'react'

export default class counter extends Component {
    componentDidUpdate(prev,number){
        console.log(this.props.prev);
        console.log(this.props.number);
        console.log("counter updated");
    }
  render() {
    return (
      <div>
        <h1>{this.props.number} hello</h1>
      </div>
    )
  }
}
