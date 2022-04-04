import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='my-5'>
            <h2 className='left-border'>New Blogs</h2>
            <Accordion defaultActiveKey="0" className='my-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>1. What is Context API?</Accordion.Header>
                <Accordion.Body>
                In React Application, data is passed parent to child. and child catch this data with props. some times it's more hard to send data using props in Deep. for stop drilling props we use Context API. Context API is a way to pass data through the component without having to pass props down manually at every level. And you can pass anything using Context API.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What are Semantic Elements?</Accordion.Header>
                <Accordion.Body>
                Semantic elements means elements with a meaning. In HTML there are some semantic elements that can be used to define different part of a web page.
                <br /><br /><strong>non-semantic</strong> div and span
                <br /><br /><strong>semantic</strong> form and table article etc. <br /><br />
                With the help of semantic tags a browser can understand where a piece of information is. Modern browser get all news help of semanting tag.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;