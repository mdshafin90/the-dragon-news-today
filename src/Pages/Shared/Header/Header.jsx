import React from 'react';
import logo from '../../../assets/logo.png'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className='text-center my-3'>
                <img src={logo} alt="" />
                <p className='text-secondary my-2 '>Journalism Without Fear or Favour</p>
            </div>
        </Container>
    );
};

export default Header;