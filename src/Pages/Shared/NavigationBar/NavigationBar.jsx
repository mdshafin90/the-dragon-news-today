import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => { console.log(error) })
    }

    return (

        <Container>
            <Navbar className='my-3 border border-3 p-3 rounded' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className="text-decoration-none text-white" to="/category/0">Home</Link>
                        <Link className="text-decoration-none text-white mx-4" to="/">About</Link>
                        <Link className="text-decoration-none text-white" to="/">Career</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        {
                            user && <Nav.Link href="#deets">
                                <FaUserCircle style={{ fontSize: '2rem' }} />
                            </Nav.Link>
                        }

                        <Nav.Link eventKey={2} href="#memes">

                            {
                                user ? <button className='p-2 rounded' onClick={handleLogOut}>Log Out</button> :
                                    <Link to="/login"><button className='p-2 rounded'>Login</button></Link>
                            }

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;