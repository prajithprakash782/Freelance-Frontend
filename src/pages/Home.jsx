import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import videoBg from '../Assets/design.mp4'
import aboutimg from '../Assets/about.png'
import startimg from '../Assets/get-started.png'
import secimg from '../Assets/safety.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (

        <div style={{overflowX:'hidden'}}>
            <Header navigation/>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <Container>

                <Row>
                    <Col className='content' lg={6} md={12} sm={12}>
                        <h1 style={{ color: 'white', overflowY: 'hidden' }}>Unlock Your Financial Freedom: Thrive through Freelancing</h1>
                        <p style={{ color: 'white', fontSize: '20px' }}>Discover the path to financial empowerment through freelancing</p>
                        <div style={{ color: 'white' }}>
                            <p>&#8226; World's largest freelance marketplace</p>
                            <p>&#8226; Any job you can possibly think of</p>
                            <p>&#8226; Save up to 90% & get quotes for free</p>
                            <p>&#8226; Pay only when you're 100% happy</p>
                        </div>
                        <Link style={{ color: 'white',textDecoration:'none' }} to={'/works'}><button className='btn btn-danger'>Get Started <i class="fa-solid fa-arrow-right ps-2"></i></button></Link>
                    </Col>
                    <Col lg={6} md={12} sm={12}></Col>
                </Row>
                <Row className='mt-5'>

                    <Col lg={6} md={12}>
                        <img className='mb-5' style={{ width: '400px', height: '350px' }} src={aboutimg} alt="no image" />
                    </Col>
                    <Col lg={6} md={12}>
                       <section id='about'>
                            <h2 className='mb-3' style={{ textDecoration: 'underline', overflowY: 'hidden' }}>About Us</h2>
                            <p>A Freelance Marketplace with some exciting features and excellent code quality. It has been designed and developed after thorough research to cater the requirements of people interested in building freelance marketplace or other similar projects.</p>
                            <br />
                            <p><span className='fw-bold'>Freelancer</span> is one of the best Freelance Marketplace and Job Board in the market. It includes, projects listings, bidding on projects, sell services, employers listings, freelancer listings and could be a great choice for making a freelance market place.</p>
                       </section>

                    </Col>
                </Row>



            </Container>
            <Row className='bg-primary'>
                <Col className='d-flex justify content-center align-items-center flex-column mt-3 mb-3' lg={12} >
                    <h1 className='p-4' style={{ color: 'white', fontWeight: 'bold', overflowY: 'hidden' }}>What kind of work can I do?</h1>
                    <p style={{ color: 'white' }}>Whatever the job, you can find it on Freelancer.com. Complete your profile so we can match you to the right jobs.</p>
                    <Link style={{ color: 'white',textDecoration:'none' }} to={'/register'}><button className='btn btn-danger'>Register Now <i class="fa-solid fa-arrow-right ps-2"></i></button></Link>
                </Col>

            </Row>
            <Container>
                <Row className='mt-5' >
                    <Col lg={6} md={12}>
                       <section id='works'>
                            <h1 className='mb-4' style={{ overflowY: 'hidden' }}>How do I get started?</h1>
    
                            <div className='mb-4'>
                                <h4 style={{ overflowY: 'hidden' }}>1. Complete your profile</h4>
                                <p>Select your skills and expertise <br />
                                    Upload a professional profile photo</p>
    
                            </div>
                            <div className='mb-4'>
                                <h4 style={{ overflowY: 'hidden' }}>2. Browse jobs that suit you</h4>
                                <p>We have jobs available for all skills. Maximize your job opportunities by optimizing your filters. Save your search and get alerted when relevant jobs are available.</p>
                            </div>
                            <div className='mb-4'>
                                <h4 style={{ overflowY: 'hidden' }}>3. Write your best bid</h4>
                                <p>Put your best foot forward and write the best pitch possible. Read the project and let the clients know you understand their brief. Tell them why you're the best person for this job. Writing a new brief for each project is more effective than using the same one!</p>
                            </div>
                            <div className='mb-4'>
                                <h4 style={{ overflowY: 'hidden' }}>4. Get awarded and earn</h4>
                                <p>Get ready to work once you get hired. Deliver high quality work and earn the agreed amount.</p>
                            </div>
    
                       </section>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center' lg={6} md={12}>
                        <img src={startimg} alt="no image" />
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col className='d-flex justify content-center align-items-center' lg={6} md={12}>
                        <img src={secimg} alt="" />
                    </Col>
                    <Col lg={6} md={12}>
                        <h1 className='mb-4' style={{ overflowY: 'hidden' }}>Safe and secure</h1>
                        <p className='mb-4'>Freelancer.com is a community that values your trust and safety as our number one priority. Our representatives are available 24/7 to assist you with any issues.</p>
                        <Row>
                            <Col lg={6}>
                                <i class="fa-solid fa-shield fa-4x mb-3"></i>
                                <h5 style={{ overflowY: 'hidden' }}>Pay with confidence</h5>
                                <p >Pay safely and securely in over 39 currencies through the Milestone Payments system. Only release payments when you are satisfied with the work.</p>
                            </Col>
                            <Col lg={6}>
                            <i class="fa-solid fa-phone fa-4x mb-3"></i>
                                <h5 style={{ overflowY: 'hidden' }}>24/7 support</h5>
                                <p>We're always here to help. Our representatives are available 24/7 to assist you with any issues.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <Footer navigation/>


        </div>



    )
}

export default Home