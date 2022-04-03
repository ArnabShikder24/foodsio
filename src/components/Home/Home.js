import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return (
        <div className='banner'>
            <Container className='pt-5'>
            <h1 className='mt-4'>Journey To Explore Food</h1>
            <h2 className='mt-4'>Sweet kingdom</h2>
            <p className='mt-4 info'>Candy is made by dissolving sugar in water or Nuts to form a syrup, which is boiled until it reaches the desired concentration or starts to caramelize. Candy comes in a wide variety of textures, from soft and chewy to hard and brittle. The texture of candy depends on the ingredients.</p>
            <Link className='btn about-btn mt-4' to='/about'>About US</Link>
            </Container>
        </div>
    );
};

export default Home;