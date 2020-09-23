import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Loan Management App</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="/" >Logout</Nav.Link>
            <Nav.Link href="/search">Search Loan Page</Nav.Link>
            <Nav.Link href="/add-loan">Add Loan</Nav.Link>
        </Nav>
    </Navbar>
);
export default Header;
