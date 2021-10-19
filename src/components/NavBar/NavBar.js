import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import logo from '../../images/fitness.jpg'
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
    const {user, logOut} = useAuth()
    const {displayName, photoURL, email} = user;
    return (
        <div >
            <Navbar className="nav-area" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand to="/home">
                <img
                    src={logo}
                    width="200px"
                    height=""
                    className="align-top d-inline-block"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={NavLink} to="/home">HOME</Nav.Link>
                    <Nav.Link as={NavLink} to="/about#about">ABOUT</Nav.Link>
                    <Nav.Link as={NavLink} to="/services#services">SERVICE</Nav.Link>
                    <Nav.Link as={NavLink} to="/package#packages">PACKAGES</Nav.Link>
                    <Nav.Link as={NavLink} to="/blog#blog">BLOG</Nav.Link>
                    <Nav.Link as={HashLink} to="/contact#contact">CONTACT</Nav.Link>
                </Nav>
                { !displayName ?
                (<Nav className="ms-auto">
                    <Link className="text-decoration-none text-light fw-bold me-2" to="/login">LOGIN</Link>
                    <Link className="text-decoration-none text-light fw-bold" to="/register">SIGN UP</Link>
                </Nav>)
                 :
                 <NavDropdown title={ <img className="drop-img" src={photoURL} alt="" />} id="basic-nav-dropdown">
                     <div>
                         <h6>{displayName}</h6>
                            <p>{email}</p>
                            <Button onClick={logOut} type="submit">Sign Out</Button>
                        </div>
                </NavDropdown>
                
                }
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;