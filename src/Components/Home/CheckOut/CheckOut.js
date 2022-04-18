import React from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {


    const handleSubmit = event => {
        event.preventDefault();

        toast('thank you for the booking')
    };


    return (
        <div>
            <Form onSubmit={handleSubmit} className="form-box">
                <h1>Submit to Checkout</h1>
                <Form.Group className="mb-3 text-start" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicName">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" required />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone number" required />
                </Form.Group>
                <input className="btn text-dark fw-bold form-submit" type="submit" value="Submit" />

                <ToastContainer />

            </Form>
        </div>
    );
};

export default CheckOut;