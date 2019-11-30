
import React from 'react';
import avatar from '../../Ryan.jpg';
import './Contact.css';
import {Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function Contact() {
  return (
  <Container>
      <Col>
      <Col>
            <div id="contact" class="near-black ttu f1 mt5">Contact</div>
            </Col>
            <Row className="mt4 mb6">
           
            <Col sm={12} md={3} lg={4}>
             <a className="App-link" href="https://www.linkedin.com/in/ryan-brown-13b198154/" target="_blank" rel="noopener noreferrer">
                 <div class="fab fa-linkedin link-imgs"></div></a>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <a className="App-link" href="https://github.com/ryannbrown" target="_blank" rel="noopener noreferrer"><div class="fab fa-github link-imgs"></div></a>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <a className="App-link" href="mailto:rb054549@gmail.com"><div class="fas fa-envelope-square link-imgs"></div></a>
            </Col>
        </Row>
            </Col>
    </Container>
  );
}

export default Contact;


