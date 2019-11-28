import React from 'react';
import avatar from '../../Ryan.jpg';
import './Nav.css';
// import {Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';


function Nav() {
  return (
  <content  style={{ "width": '100%' }} >
     <nav className="dt w-100 border-box pa3 ph5-ns">
  <a className="dtc v-mid h2 light-gray link dim w-25" href="#" title="Home">
    <a className="link w2 h2 nav-name" alt="Site Name">Ryan Brown</a>
  </a>
  <div className="dtc v-mid w-75 tr">
    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#portfolio" title="About">Portfolio</a>
    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="https://docs.google.com/document/d/1q-v0drg3JODJf7hEloghY6I2Svn6f_RK_kIviFNDGoU/edit?usp=sharing" target="_blank"  rel="noopener noreferrer" title="Store">Resume</a>
    <a className="link dim dark-gray f6 f5-ns dib" href="#contact" title="Contact">Contact</a>
  </div>
</nav>
    </content>
  );
}

export default Nav;
