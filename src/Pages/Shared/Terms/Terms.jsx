import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='my-4'>
            <div>
                <h1 className='text-center border border-primary p-5 rounded display-3'>Terms & Conditions Are Coming Soon</h1>
                <p className='border border-danger p-5 display-6 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi impedit maxime cum. Vel deleniti voluptatum adipisci sequi libero quia dignissimos, quisquam, architecto iure iusto sunt vero optio pariatur temporibus?</p>
                <div className='border border-success p-5 rounded'>
                    <h3>Some Terms Are Coming Today....With Order List</h3>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
            </div>
            <div className='border border-warning p-5 rounded my-4 text-center'>
                <h1>After Reading This <Link to="/register">Please Back To Register</Link></h1>
            </div>
        </Container>
    );
};

export default Terms;