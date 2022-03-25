import React from 'react';
import { Container,  Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo_.jpg'

const Header = () => {
    return (
        <div >
            
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
     GS Rings <img className='rounded-circle' src={logo} alt="" />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav >
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link href="#features">Customer Service</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<h1 className='mt-2'> Gold & Silver Rings</h1>
        </div>
    );
};

export default Header;
