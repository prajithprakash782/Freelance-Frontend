import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png'

function Header({ navigation,logout }) {
    return (
        <>
            {
                navigation &&

                <Navbar expand="lg" className="bg-primary">
                    <Container>
                        <Link to={'/'}><img style={{width:'200px',height:'50px'}} src={Logo} alt="no image" /></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto d-flex justify-content-center align-items-center ms-3">
                                <Nav.Link className='link' href='#about' style={{ color: 'white',textDecoration:'none' }}>About Us</Nav.Link>
                                <Nav.Link className='ms-2 link' href='#works' style={{ color: 'white',textDecoration:'none' }}>How it Works</Nav.Link>
                                <Link className='ms-3 link' style={{ color: 'white',textDecoration:'none' }} to={'/works'}>View Projects</Link>




                            </Nav>

                            <Nav.Link className='me-3 text-center'><Link className='link' style={{ color: 'white', textDecoration: 'none' }} to={'/login'}>Log In</Link></Nav.Link>
                            <Nav.Link className='text-center' ><Link className='link' style={{ color: 'white', textDecoration: 'none' }} to={'/register'}>Sign Up</Link></Nav.Link>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>}

                {
                    logout &&
                    <Navbar expand="lg" className="bg-primary">
                    <Container>
                    <Link to={'/'}><img style={{width:'200px',height:'50px'}} src={Logo} alt="no image" /></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto d-flex justify-content-center align-items-center">
                                
                                <Link className='link' style={{ color: 'white',textDecoration:'none' }} to={'/works'}>View Projects</Link>
                                <Nav.Link className='ms-3 text-center'><Link className='link' style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Log Out</Link></Nav.Link>




                            </Nav>

                            
                            

                        </Navbar.Collapse>
                    </Container>
                </Navbar>}
                


        </>
    )
}

export default Header