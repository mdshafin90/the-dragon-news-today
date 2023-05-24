import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='my-3'>
            <h4 className='text-center'>Login With</h4>
            <Button className='my-3 w-100 d-flex align-items-center justify-content-center mx-auto' variant="outline-success"> <FaGoogle />  Login With Google</Button>
            <Button className='d-flex w-100 align-items-center justify-content-center mx-auto' variant="outline-success"> <FaGithub />  Login With Github</Button>

            <div className='my-3'>
                <h4 className='text-center'>Find Us On</h4>
                <ListGroup className='text-start my-3'>
                    <ListGroup.Item> <FaFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram />  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='card'>
                <img className='card-img w-100' src={bg} alt="" />
                <div className='d-flex align-items-center justify-content-center text-center  card-img-overlay'>
                    <div className='card-body text-light'>
                        <h3 className='card-title display-6 fw-bold'>Create an Amazing Newspaper</h3>
                        <p className='card-subtitle fs-5 my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more...</p>
                        <button className='btn btn-danger fw-bold'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;