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
              <Col><img src='https://i.ibb.co/2SbrdkP/Ryan1-b39c770b.jpg' className="App-logo" style={{ "border-radius": '50%' }} alt="logo" /></Col>
          </Row>
        
          <Row>
              <Col>
                <p className="mv3">Hello! My name is Ryan.
                A little bit about me:
                I have a Bachelors Degree in Geographical Information Systems (GIS). After yearning for  a more creative outlet, I jumped into web development and couldn't be more excited with where it took me in my career. I currently am building and maintaining car dealership websites at Sokal. I pride myself in hard work and polished results. </p>
          </Col>
          </Row>
            <Row>
                <Col style={{"width":"100%"}} md={6}>
                <a className="App-link text-center" href="#"><Button variant="secondary" href="#portfolio" className="resume-btn ma2">Portfolio</Button></a>
                </Col>
                <Col style={{"width":"100%"}} md={6}>
                <a className="App-link text-center" href="https://docs.google.com/document/d/1q-v0drg3JODJf7hEloghY6I2Svn6f_RK_kIviFNDGoU/edit?usp=sharing" target="_blank"  rel="noopener noreferrer"><Button variant="secondary" className="resume-btn ma2">Resume</Button></a>
                </Col>
            </Row>
      </header>
    </Container>
  );
}

export default About;
