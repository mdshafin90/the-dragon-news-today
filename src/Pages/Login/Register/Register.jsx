import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div>
            <h1 className='text-center'>Please Register !!!</h1>
            <Form onSubmit={handleRegister} className='w-50 mx-auto border p-5 my-4 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo URL Link" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} name='accept' type="checkbox" label={<>
                        Accept & <Link to="/terms">Check The Terms & Conditions</Link>
                    </>} />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} className='w-100' type="submit">
                    Register
                </Button>
            </Form>
            <Form.Text className="text-muted text-center">
                <p className='text-dark'>Already Have An Account ? <Link to="/login">Please Login</Link></p>
            </Form.Text>
        </div>
    );
};

export default Register;