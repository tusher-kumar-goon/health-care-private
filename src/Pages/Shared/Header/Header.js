import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={{ background: 'rgb(193, 243, 193)' }} variant="light" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Medical Health care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#staffs">Staffs</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="warning">LogOut</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <b> User:</b> <a href="#login">{user?.displayName}</a>
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