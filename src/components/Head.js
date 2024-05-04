import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Head() {
  return (
      <Navbar  sticky='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">PHOTOPHOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link><Link to='/'style={{textDecoration:'none'}} className='text-dark'>HOME</Link> </Nav.Link>
            <Nav.Link ><Link to='/about' style={{textDecoration:'none'}}className='text-dark'>  ABOUT</Link></Nav.Link>
            <NavDropdown title="Gallery" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">GALLERY</NavDropdown.Item>
              <NavDropdown.Item><Link to='/nature' style={{textDecoration:'none'}}>
                Nature </Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link to='/sports' style={{textDecoration:'none'}} >Sports</Link> </NavDropdown.Item>
        
              <NavDropdown.Item>
              <Link to='/travel' style={{textDecoration:'none'}}>Travel </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link to='/service' style={{textDecoration:'none'}} className='text-dark'>SERVICES </Link></Nav.Link>
            <Nav.Link ><Link to='/contact' style={{textDecoration:'none'}} className='text-dark'> CONTACT</Link> </Nav.Link>
          </Nav>
          <div className='text-dark '>
        <h4><i class="bi bi-instagram p-2"></i>
        <i class="bi bi-facebook p-2"></i>
        <i class="bi bi-twitter p-2"></i>
        <i class="bi bi-linkedin"></i>
        </h4>
        </div>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    
  )
}

export default Head