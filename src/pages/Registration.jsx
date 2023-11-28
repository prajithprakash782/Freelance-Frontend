import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';

import ImageIcon from '@mui/icons-material/Image';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import './Registration.css'
import axios from 'axios';
import  {toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registration() {

    const [image, setImage] = useState('');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        image: '',
        skill: []

    })


    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    function handleImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setFormData({ ...formData, image: reader.result });
            setImage(reader.result); // Update the image state
        };

        reader.readAsDataURL(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        let isvalid = false;
        let validationErrors = {}
        if (formData.firstname === "" || formData.firstname === null) {
            isvalid = false;
            validationErrors.firstname = "First Name Required"
        }


        if (formData.lastname === "" || formData.lastname === null) {
            isvalid = false;
            validationErrors.lastname = "Last Name Required"
        }
        if (formData.email === "" || formData.email === null) {
            isvalid = false;
            validationErrors.email = "Email Required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isvalid = false;
            validationErrors.email = "Email is not valid"
        }
        if (formData.password === "" || formData.password === null) {
            isvalid = false;
            validationErrors.password = "Password Required"
        } else if (formData.password.length < 6) {
            isvalid = false;
            validationErrors.password = "Password should contain atleast 6 characters"
        }
        if (formData.confirmpassword !== formData.password) {
            isvalid = false
            validationErrors.confirmpassword = "Passwords don't match"
        }
        if (formData.skill === "" || formData.skill === null) {
            isvalid = false;
            validationErrors.skill = "skill required"
        }
        try {
            const response = await axios.get(`https://freelance-backend-yfpi.onrender.com/users?email=${formData.email}`);
            if (response.data.length > 0) {
                isvalid = false;
                validationErrors.email = "Email already exists";
            }
        } catch (error) {
            console.error("Error checking email existence:", error);
        }
        setErrors(validationErrors)
        setValid(isvalid)

        if (Object.keys(validationErrors).length === 0) {



            axios.post('https://freelance-backend-yfpi.onrender.com/users', formData)
                .then(result => {
                    toast.success("Registered Successfully")
                    navigate('/login')
                })
                .catch(err => console.log(err))
        }

    }
    return (


        <div className='bg-img'>
            <Container>
                <Row style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
                    <div className=' d-flex border bg-light'>
                        <Col className='reg-img me-4 d-flex justify-content-center align-items-center flex-column' lg={6} md={6} sm={12} >
                            <h1 style={{ color: 'orange', overflowY: 'hidden' }}>Welcome to freelancer</h1>
                            <p style={{ color: 'orange', fontWeight: 'bold' }}>Register Now</p>
                        </Col>

                        <Col className='mt-4 pe-4' lg={6} md={6} sm={12}>
                            <h3 style={{ overflowY: 'hidden' }}>Registration</h3>


                            <Form onSubmit={handleSubmit}>
                                <div className='mb-2'>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField className='w-50 me-4' id="input-with-sx" label="First Name" variant="standard" onChange={(event) => setFormData({ ...formData, firstname: event.target.value })} />
                                        
                                        {
                                            !valid && <span style={{fontSize:'10px'}} className='text-danger'>{errors.firstname}</span>

                                        }
                                        <TextField className='w-50' id="standard-basic" label="Last Name" variant="standard" onChange={(event) => setFormData({ ...formData, lastname: event.target.value })} />
                                        {
                                            !valid && <span style={{fontSize:'10px'}} className='text-danger'>{errors.lastname}</span>

                                        }
                                    </Box>
                                </div>

                                <div className='mb-2'>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField className='w-100' id="standard-basic" label="Email" variant="standard" onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                                        {
                                            !valid && <span style={{fontSize:'10px'}} className='text-danger'>{errors.email}</span>

                                        }
                                    </Box>
                                </div>

                                <div className='mb-2'>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField type='password' className='w-50 me-4' id="standard-basic" label="Password" variant="standard" onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
                                        {
                                            !valid && <span style={{fontSize:'10px'}} className='text-danger'>{errors.password}</span>

                                        }
                                        <TextField type='password' className='w-50' id="standard-basic" label=" Confirm Password" variant="standard" onChange={(event) => setFormData({ ...formData, confirmpassword: event.target.value })} />
                                        {
                                           !valid && <span style={{fontSize:'10px'}} className='text-danger'>{errors.confirmpassword}</span>

                                        }
                                    </Box>
                                </div>

                                <div className='mb-3'>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <SettingsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField className='w-100' id="standard-basic" label="Skills : Eg - HTML, CSS" variant="standard" onChange={(event) => {
                                            const skills = event.target.value.split(',').map(skill => skill.trim());
                                            setFormData((prevData) => ({ ...prevData, skill: skills.filter(Boolean) }));
                                        }} />
                                        {
                                            !valid && <span style={{fontSize:'10px'}} className='text-danger'>{errors.skill}</span>
                                        }
                                    </Box>
                                </div>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <div className='mb-2'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <ImageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                            <Form.Label>Profile Image</Form.Label>
                                        </Box>
                                    </div>
                                    <Form.Control type="file" onChange={handleImage} />
                                </Form.Group>
                                <button type='submit' className='btn btn-outline-success w-100'>Sign Up</button>
                            </Form>
                            <div className="mt-3">
                                <p className="mb-4  text-center">
                                    Already have an account?{' '}
                                    <Link to="/login">Login Now</Link>
                                </p>
                            </div>


                        </Col>
                    </div>

                </Row>
            </Container>
            

        </div>

    )
}

export default Registration