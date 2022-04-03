import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Foodsio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <NavLink className='nav-link' to="/home">Home</NavLink>
                    <NavLink className='nav-link' to="/reviews">Reviews</NavLink>
                    <NavLink className='nav-link' to="/dashboard">Dashboard</NavLink>
                    <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
                    <NavLink className='nav-link' to="/about">About</NavLink>
                    <NavLink className='nav-link' to="/contact">Contact</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;