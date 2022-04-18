import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('Reviewers.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='m-5'>
            <h2 className='text-success'>My Client Reviews</h2>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review =>
                            <Review
                                key={review.id}
                                review={review}
                            ></Review>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;