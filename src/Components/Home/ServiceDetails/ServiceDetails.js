import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {



    const { serviceId } = useParams();
    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded w-50 mx-auto mt-5">
            <div className='mt-3'>
                <img className='img-fluid' src="https://i.ibb.co/K0h4wRr/thank-you-yellow-square-price-260nw-1098838523.jpg" alt="" />
                <h5>You selcted: <span className='text-danger'>{serviceId}</span></h5>
                <Link to="/checkout" >
                    <Button variant="outline-dark btn-warning border-0 mt-5">Check Out</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;