import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="card">
          <p>Howdy!</p> 
        </Row>
      </Container>
    );
  }
}

export default App;
