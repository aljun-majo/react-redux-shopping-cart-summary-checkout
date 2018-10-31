import React, { Component } from 'react';
import { Collapse, Button, CardBody, 
    Card, CardImg, CardText, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

import ProductImage from '../assets/iot.jpg';


class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, status: 'View +' };
      }
    
      onEntering() {
        this.setState({ status: 'Opening...' });
      }
    
      onEntered() {
        this.setState({ status: 'Hide -' });
      }
    
      onExiting() {
        this.setState({ status: 'Closing...' });
      }
    
      onExited() {
        this.setState({ status: 'View +' });
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    
      render() {
        return (
          <div>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Product Details <small className="badge badge-light">{this.state.status}</small></Button>
            
            <Collapse
              isOpen={this.state.collapse}
              onEntering={this.onEntering}
              onEntered={this.onEntered}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <Card>
                <CardBody className="bg-info">
                <Card>
                    <CardBody>
                    <CardTitle>Product Name</CardTitle>
                    </CardBody>
                        <img width="100%" src={ProductImage} alt="Card image cap" />
                    <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Product Link</CardLink>
                    </CardBody>
                </Card>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      }
    }

    export default ProductDetails;