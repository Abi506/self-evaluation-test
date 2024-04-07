import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'


function header() {
  return (
    <>
      <Navbar bg="primary" fixed="top"  data-bs-theme="dark" id="nav-bar">
        <Container>
          <Navbar.Brand href="#home" id="nav-heading">
            SuperLearn</Navbar.Brand>
          <Nav className="m-auto">

            <div className='m-auto d-flex flex-direction flex-start'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#teach">Categories</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            </div>

          </Nav>

          <Nav className='ml-auto'>
          <Button variant="outline-info" className='d-flex'>
          <Nav.Link href="#about">Login</Nav.Link>
          <CgProfile className='nav-profile'/>
          </Button>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default header;