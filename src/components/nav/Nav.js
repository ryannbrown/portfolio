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
    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
    <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Join Us</a>
  </div>
</nav>
    </content>
  );
}

export default Nav;
