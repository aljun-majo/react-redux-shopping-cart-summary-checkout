import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import ImageOne from './assets/internet-of-things.png'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import Subtotal from './components/Subtotal';
import PickupSaving from './components/PickupSaving';
import TaxesFees from './components/TaxesFees'
import TotalAmount from './components/TotalAmount'
import ProductDetails from './components/ProductDetails'

class App extends Component {
  constructor() {
    super();

    this.state = {
      subTotal: 10,
      pickSavings: 1.3,
      taxes: 0,
      totalAmount: 100
    }
  }
  render() {
    const { 
      subTotal, pickSavings, taxes, totalAmount
    } = this.state

    return (
      <Container className="mt-5">
        <Row>
          <Col 
            xs="12" 
            sm={{ size: 10, offset: 1 }} 
            lg={{ size: 8, offset: 2 }}>
            <Card>
            <CardImg top width="100%" src={ImageOne} alt="Card image cap" />
            <CardBody>
              <CardTitle>Order Total</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <div className="card-text border-bottom border-top border-1 border-light my-1 py-4">
                <Subtotal price={subTotal.toFixed(2)} />
                <PickupSaving pickSavings={pickSavings.toFixed(2)} />
                <TaxesFees taxes={taxes.toFixed(2)} />
              </div>
              <div className="mb-2"> 
                <ProductDetails />
              </div>
              <div className="border-bottom border-top border-1 p-3 mb-2 bg-warning text-dark">
                <TotalAmount totalAmount={totalAmount} />
              </div>

              
            </CardBody>
          </Card>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
