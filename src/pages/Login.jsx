import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const [formData,setFormData]=useState({
    email:'',
    password:'',
    })
    const [user, setUser] = useState(null);
    const [errors,setErrors]=useState({})
    const[valid, setValid]=useState(true)
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(formData);
        let isvalid=false;
        let validationErrors={}
         
        if(formData.email === "" || formData.email === null){
            isvalid=false;
            validationErrors.email = "Email Required"
        }else if(!/\S+@\S+\.\S+/ .test(formData.email)){
            isvalid=false;
            validationErrors.email = "Email is not valid"
        }
        if(formData.password === "" || formData.password === null){
            isvalid=false;
            validationErrors.password = "Password Required"
        }else if(formData.password.length < 6){
            isvalid=false;
            validationErrors.password = "Password should contain atleast 6 characters"
        }
        

       


       
        axios.get('https://freelance-backend-yfpi.onrender.com/users')
        .then(result => {
          let userFound = false;
      
          result.data.forEach(user => {
            if (user.email === formData.email) {
              userFound = true;
      
              if (user.password === formData.password) {
                toast.success('Login Successfully');
                setUser({ firstName: user.firstname, lastName: user.lastname });
                localStorage.setItem('user', JSON.stringify({ firstName: user.firstname, lastName: user.lastname }));
                navigate('/profile');
              } else {
                isvalid = false;
                validationErrors.password = "Password is incorrect";
              }
            }
          });
      
          if (!userFound && formData.email !== "") {
            isvalid = false;
            
            validationErrors.email = "Email is not registered";
          }
      
          setErrors(validationErrors);
          setValid(isvalid);
        })
        .catch(err => console.log(err));
      
        
    }
  return (
    <div className='bg-img'>
      <Container>
        <Row style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
          <div style={{height:'500px'}} className=' d-flex border bg-light'>
            <Col className='reg-img me-4 d-flex justify-content-center align-items-center flex-column' lg={6} >
              <h2 style={{ color: 'orange',overflowY:'hidden' }}>Welcome to freelancer</h2>
              <p style={{ color: 'orange', fontWeight: 'bold' }}>Log In Now</p>
            </Col>
  
            <Col className='mt-4 pe-4 d-flex justify-content-center align-items-center flex-column' lg={6}>
              <h3 style={{overflowY:'hidden'}}>Log In</h3>
  
  
  
  
              <Form className='mb-2 w-100' onSubmit={handleSubmit}>
                
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField className='w-100 mb-2' id="standard-basic" label="Email" variant="standard" onChange={(event)=>setFormData({...formData,email: event.target.value})} />
                    {
                        !valid && <span style={{fontSize:'10px'}} className='text-danger ms-3'>{errors.email}</span>

                    }
                  </Box>
                
    
                <div className='w-100'>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField type='password' className='w-100' id="standard-basic" label="Password" variant="standard" onChange={(event)=>setFormData({...formData,password: event.target.value})} />
                    {
                        !valid && <span style={{fontSize:'10px'}} className='text-danger ms-3'>{errors.password}</span>

                    }
      
                  </Box>
                </div>
    
    
                <button type='submit' className='btn btn-outline-success w-100 mt-4'>Log In</button>
              </Form>
              <div className="mt-3">
                <p className="mb-0  text-center">
                  Don't have an account?{' '}
                  <Link to="/register">Sign Up</Link>
                </p>
              </div>
  
  
            </Col>
          </div>
        </Row>
        
      </Container>
      
      
    </div>
  )
}

export default Login