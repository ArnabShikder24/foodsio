import React from 'react';
import { Container } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <Container className='py-5 mb-5'>
            <h2 className='left-border mb-5'>All Reviews</h2>
            <div className='review-section'>
                {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)  
                }
            </div>
        </Container>
    );
};

export default Reviews;