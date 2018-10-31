import React, { Component } from 'react'

export default class TotalAmount extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="mb-0">Total Amount: <span>$</span><span>{this.props.totalAmount}</span></h2>
        
      </React.Fragment>
    )
  }
}
