import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center my-3'>
                <img src={logo} alt="" />
                <p className='text-secondary my-2 fs-5'>Journalism Without Fear or Favour</p>
                <p className='f-bold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3 my-2 rounded border border-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='mx-2' speed={100}>
                    I can be a React component, multiple React components, or just some text....I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>

            <Navbar className='my-3 border border-3 p-3 rounded' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <button className='p-2 rounded'>Login</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;