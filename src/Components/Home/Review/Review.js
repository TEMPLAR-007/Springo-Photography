import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Review = (props) => {
    const { name, img, reviews, rating } = props.review;
    return (
        <div className="col-md-3 g-3">

            <CardGroup className="shadow-lg p-3 mb-5 bg-body rounded">
                <div>
                    <Card.Img className='w-25' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {reviews}
                        </Card.Text>
                        <h5>Rating: {rating}</h5>
                    </Card.Body>

                </div>
            </CardGroup >
        </div>
    );
};

export default Review;