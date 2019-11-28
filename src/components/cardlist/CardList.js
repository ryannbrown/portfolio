import React from 'react';
import avatar from '../../Ryan.jpg';
import './CardList.css';
import {Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SingleCard from '../card/Card'
import projects from '../../data/projects.js'


function CardList() {
  return (
  <content>
     
     
      <div className="card-wrapper">
        {
            projects.map(project => (
              
          <SingleCard link={project.link} image= {project.image} title={project.title} tech={project.tech} desc={project.description}
            />
                ))};
        </div>  
</content>  
    
  )}


export default CardList;
