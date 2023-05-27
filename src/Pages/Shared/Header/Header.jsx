import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    const { user } = useContext(AuthContext)

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

        </Container>
    );
};

export default Header;