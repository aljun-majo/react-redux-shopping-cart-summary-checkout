import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class Subtotal extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Subtotal</h3>
        <p><span className="font-weight-bold fontitalic mr-1">$</span>{this.props.subTotal}</p>
      </React.Fragment>
    )
  }
}

export default Subtotal;