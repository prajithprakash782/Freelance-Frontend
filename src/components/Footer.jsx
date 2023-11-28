import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer({ navigation }) {
    return (
        <div style={{overflowX:'hidden'}}>

            {
                navigation &&
                <Row  className='bg-primary ps-5 pt-4'>
                    <Col lg={3}>
                        <h5 className='text-secondary' style={{ textDecoration: 'underline', overflowY: 'hidden' }}>Freelancer</h5>
                        <p style={{color:'white'}}><span className='fw-bold'>Freelancer</span> is one of the best Freelance Marketplace and Job Board in the market. It includes, projects listings, bidding on projects, sell services, employers listings, freelancer listings and could be a great choice for making a freelance market place.</p>
                    </Col>
                    <Col lg={3} className='d-flex flex-column'>
                        <h5 className='text-secondary' style={{ textDecoration: 'underline', overflowY: 'hidden' }}>Pages</h5>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'/'}>Home</Link>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'/register'}>Register</Link>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>Login</Link>
                        <Link className='mb-4 link' style={{ textDecoration: 'none', color: 'white' }} to={'/works'}>Works</Link>

                    </Col>
                    <Col lg={3} className='d-flex flex-column'>
                        <h5 className='text-secondary' style={{ textDecoration: 'underline', overflowY: 'hidden' }}>Guides</h5>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'https://react.dev/'}>React</Link>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'https://react-bootstrap.netlify.app/'}>React-Bootstrap</Link>
                        <Link  className='mb-4 link' style={{ textDecoration: 'none', color: 'white' }} to={'https://bootswatch.com/'}>Bootswatch</Link>

                    </Col>
                    <Col lg={3}>
                        <h5 className='text-secondary' style={{ textDecoration: 'underline', overflowY: 'hidden' }}>Contact Us</h5>
                        <div className='d-flex justify-content-evenly mt-3'>
                            <div className='icons'><Link className='icon1' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x w-100"></i></Link></div>
                            <div className='icons'><Link className='icon2' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x w-100"></i></Link></div>
                            <div className='icons'><Link className='icon3' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link></div>
                            <div className='icons'><Link className='icon4' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link></div>
                        </div>
                    </Col>
                    <p className='text-center mt-3'>Copyright 2023 Freelancer. Built with REACT</p>
                </Row>}






        </div>
    )
}

export default Footer