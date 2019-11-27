import React from 'react';
import avatar from '../../Ryan.jpg';
import './About.css';
import {Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function About() {
  return (
  <Container>
      <header className="App-header">
          <Row>
              <Col><img src='https://i.ibb.co/2SbrdkP/Ryan1-b39c770b.jpg' className="App-logo mt-5" style={{ "border-radius": '50%' }} alt="logo" /></Col>
          </Row>
        
          <Row>
              <Col>
                <p className="mv3">Hello! My name is Ryan.
                A little bit about me:
                I have a Bachelors Degree in Geographical Information Systems (GIS). I recently jumped into the realm of web development and couldn't be more thrilled. I currently build websites working with an advertising agency. I pride myself in hard work and polished results. </p>
          </Col>
          </Row>
            <Row>
                <Col style={{"width":"100%"}} md={6}>
                <a className="App-link text-center" href="#"><Button variant="secondary" className="resume-btn ma2">Portfolio</Button></a>
                </Col>
                <Col style={{"width":"100%"}} md={6}>
                <a className="App-link text-center" href="https://docs.google.com/document/d/1q-v0drg3JODJf7hEloghY6I2Svn6f_RK_kIviFNDGoU/edit?usp=sharing" target="_blank"  rel="noopener noreferrer"><Button variant="secondary" className="resume-btn ma2">Resume</Button></a>
                </Col>
            </Row>
            <Col>
            <Row className="mt4 mb6">
            <Col sm={12} md={6} lg={6}>
             <a className="App-link" href="https://www.linkedin.com/in/ryan-brown-13b198154/" target="_blank" rel="noopener noreferrer">
                 <div class="fab fa-linkedin link-imgs"></div></a>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <a className="App-link" href="https://github.com/ryannbrown" target="_blank" rel="noopener noreferrer"><div class="fab fa-github link-imgs"></div></a>
            </Col>
        </Row>
            </Col>
      </header>
    </Container>
  );
}

export default About;
