import React, { useState, useEffect } from 'react';
import './Works.css'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


function Works() {
    const [imageData1, setImageData1] = useState('');
    const [firstname1, setFirstname1] = useState('');
    const [projectlink, setProjelink] = useState('');
    const [techno, setTechnology] = useState('');

    useEffect(() => {
        // Fetch the JSON data from your server
        fetch('https://freelance-backend-yfpi.onrender.com/users')
            .then((response) => response.json())
            .then((data) => {
                // Assuming your server provides image data in a field called 'image'
                const base64Data = data[1].project; // Assuming there's only one image in the array
                const f1name = data[0].firstname
                const prolink = data[1].link1;
                const technology = data[1].tech;
                // Set the image data for rendering
                setImageData1(base64Data);
                setFirstname1(f1name);
                setProjelink(prolink);
                setTechnology(technology);
            })
            .catch((error) => {
                console.error('Error fetching image data:', error);
            });
    }, []);
    return (
        <div className='body'>
            <div className='d-flex justify-content-between container mt-5'>
                <h3 style={{ marginLeft: "100px" }}>Projects</h3>
                <Link to={'/'}><Button className='btn btn-dark'><i style={{ marginRight: '10px' }} class="fa-solid fa-arrow-left"></i>Back to home</Button></Link>
            </div>
            <div  className='mt-5 d-flex justify-content-center align-items-center project-container'>
                <div className="project-card">
                    <a href="#" className="project-link">
                        <img src={imageData1} alt="" className="project-image" />
                        <div className="over flex-column">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{firstname1}</Card.Title>
                                    <Card.Text>
                                        <Link to={projectlink} target="_blank" >Project link </Link >
                                    </Card.Text>
                                    <Card.Text><span className='fw-bold'>Technologies Used:</span> {techno}</Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Contact No:</span> +91 9993647235
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Price:</span> Rs 200
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </a>
                </div>
                <div className="project-card">
                    <a href="#" className="project-link">
                        <img src="https://img.freepik.com/premium-photo/vintage-cyber-girl-digital-old-painting-artwork_743855-2055.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698796800&semt=ais" alt="" className="project-image" />
                        <div className="over flex-column">
                            <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                    <Card.Title>Toni</Card.Title>
                                    <Card.Text>
                                        <Link to={''} >Project link </Link >
                                    </Card.Text>
                                    <Card.Text><span className='fw-bold'>Technologies Used:</span> HTML & CSS</Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Contact No:</span> +91 4653468545
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Price:</span> Rs 500
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </a>
                </div>
                <div className="project-card">
                    <a href="#" className="project-link">
                        <img src="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg" alt="" className="project-image" />
                        <div className="over flex-column">
                            <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                    <Card.Title>Jibin</Card.Title>
                                    <Card.Text>
                                        <Link to={''} >Project link </Link >
                                    </Card.Text>
                                    <Card.Text><span className='fw-bold'>Technologies Used:</span> HTML , CSS & Javascript</Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Contact No:</span> +91 6834852343
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Price:</span> Rs 700
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </a>
                </div>
                <div className="project-card">
                    <a href="#" className="project-link">
                        <img src="https://a-static.besthdwallpaper.com/astronaut-girl-digital-art-wallpaper-3554x1999-80726_53.jpg" alt="" className="project-image" />
                        <div className="over flex-column">
                            <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                    <Card.Title>Nestin</Card.Title>
                                    <Card.Text>
                                        <Link to={''} >Project link </Link >
                                    </Card.Text>
                                    <Card.Text><span className='fw-bold'>Technologies Used:</span> React</Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Contact No:</span> +91 6789545673
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Price:</span> Rs 800
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </a>
                </div>

            </div>
            <br />
            <br />

            <div style={{ height: '9px' }} className='bg-primary'>

            </div>
            <Footer navigation />

        </div>


    )
}

export default Works