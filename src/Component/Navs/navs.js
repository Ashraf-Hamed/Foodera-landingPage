import React from 'react'
import {Container , Nav , Navbar} from 'react-bootstrap';
import logoImg from '../../assets/logo.png'
import './nav.css'



const Navs = () =>  {
  return (
  
    
    <Navbar  expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            <img src={logoImg} alt="logo-page" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='links' href="#home">Home</Nav.Link>
                <Nav.Link className='links' href="#about">About Us</Nav.Link>
                <Nav.Link className='links' href="#explore">Explore Foods</Nav.Link>
                <Nav.Link className='links' href="#review">Reviews</Nav.Link>
                <Nav.Link className='links' href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link className='links number' >0123 589 637</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
     </Navbar>
      
     
     );

  }
export default  Navs 