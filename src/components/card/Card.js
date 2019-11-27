import React from 'react';
import './Card.css';
import {Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import projects from '../../data/projects.js'


function SingleCard(props) {
  return (
  <Container className="cards">
    <Card style={{ width: '18rem' }}>
      <a target="_blank" rel="noopener noreferrer" href={props.link}>
  <Card.Img className="dim" variant="top" src={props.image} />
  <Card.Body>
    <Card.Title className="near-black b f2">
{props.title}
    </Card.Title>
    <Card.Text>
    {props.tech.map((tech, key) => {
									return <button className={"tech-btn f6 link dim ba bw2 ph3 pv2 mb2 dib black"} key={key}>{tech.name} </button>
    })}
    
    </Card.Text>
    <Card.Text className="f5">
     {props.desc}
    </Card.Text>
  </Card.Body>
  </a>
</Card>
    </Container>
  );
}

export default SingleCard;
