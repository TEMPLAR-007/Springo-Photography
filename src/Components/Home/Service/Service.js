import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, img, description, price } = service;

    const navigate = useNavigate()

    const handleNavigateServiceDetail = id => {
        navigate(`/service/service${id}`);
    }

    return (
        <div className="col">
            <div className="card p-2 mb-5 bg-body">
                <img height={500} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mt-5">{description.slice(0, 300)}...</p>
                    <h6 className='mt-5 mb-3'>{price}</h6>
                    <Button onClick={() => handleNavigateServiceDetail(id)} variant="outline-dark btn-warning border-0">Purchase</Button>
                </div>
            </div>
        </div>
    );

};

export default Service;