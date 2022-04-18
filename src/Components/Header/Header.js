import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../Images/site logo/logo.png'
import CustomLink from './CustomLink/CustomLink';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/"><img width={50} src={logo} alt="" /> <span className='fw-bold text-success'>Springo <span className='text-dark'>Photography</span></span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto align-items-center gap-3'>
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                            {
                                user ?
                                    <Button onClick={handleSignOut} variant='outline-dark border-0 '>Sign Out</Button>

                                    :
                                    <CustomLink to="/login">Login</CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;