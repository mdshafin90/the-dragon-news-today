import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { logInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    console.log('login page location', location)

    const from = location.state?.from?.pathname || '/category/0'

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1 className='text-center'>Please Login !!!</h1>
            <Form onSubmit={handleLogIn} className='w-25 mx-auto border p-5 my-4 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" className='w-100' type="submit">
                    Login
                </Button>
            </Form>
            <Form.Text className="text-muted text-center">
                <p className='text-dark'>Don't Have An Account ? <Link to="/register">Please Register</Link></p>
            </Form.Text>
        </div>
    );
};

export default Login;