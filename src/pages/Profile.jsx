import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Add from '../components/Add';
import MyProfile from '../components/MyProfile';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

function Profile() {
  const [firstname,setFirstname] = useState('');
  const [pro,setpro] = useState('');
  useEffect(() => {
    // Fetch the JSON data from your server
    fetch('https://freelance-backend-yfpi.onrender.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Assuming your server provides image data in a field called 'image'
        // Assuming there's only one image in the array
          const fname=data[0].firstname
          const pro = data[1].project;
        // Set the image data for rendering
       
        setFirstname(fname);
        setpro(pro);

      })
      .catch((error) => {
        console.error('Error fetching image data:', error);
      });
      

      
  }, []);
  
  const deleted = async () => {
    try {
      // Send a DELETE request to delete the entire "users" array
      const response = await axios.delete(`https://freelance-backend-yfpi.onrender.com/users/2`);
      // Handle the response if needed
      console.log(response.data); // You can log the response data or perform additional actions
  
    } catch (error) {
      // Handle errors
      console.error('Error deleting the "users" array:', error);
    }
    window.location.reload();
  };


  return (
    <>
      <Header logout />

      <h2 className='mt-3 ms-3'>
        Welcome <span className='text-warning'>{firstname}</span>
      </h2>

      <Row className='container-fluid mt-3'>
        <Col sm={12} md={4}>
          {/* Pass the fetch function as a prop to MyProfile */}
          <MyProfile />
        </Col>
        <Col sm={12} md={8}>
          <Add />
          {/* Add other components or content here */}
          {pro &&
            <div style={{border:'none'}} className='mt-5 ms-3 test'>
            <img style={{width:'18rem'}} className='rounded' src={pro}/>
            <button onClick={deleted} className='btn btn-danger rounded'><i class="fa-sharp fa-solid fa-trash "></i></button>
          </div>}
        </Col>
      </Row>

      <Footer navigation />
    </>
  );
}

export default Profile;