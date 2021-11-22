import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={{ background: 'rgb(193, 243, 193)' }} variant="light" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" style={{ fontWeight: 800, color: "Purple" }}>Medical Health care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className='header'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className='header'>Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#staffs" className='header'>Staffs</Nav.Link>
                        <Nav.Link as={HashLink} to="/about" className='header'>About</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="warning">LogOut</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <b className="ms-3" > Name: </b> <a href="#login"> <b>{user?.displayName}</b> </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;