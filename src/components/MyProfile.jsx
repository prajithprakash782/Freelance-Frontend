
import React, { useState, useEffect } from 'react';
import Skill from './Skill';
import { Col, Row } from 'react-bootstrap';



function MyProfile() {
  const [imageData, setImageDatas] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setFirstemail] = useState('');
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from your server
    fetch('https://freelance-backend-yfpi.onrender.com/users')
      .then((response) => response.json())
      .then((data) => {
        const base64Data = data[0].image;
        const fname = data[0].firstname;
        const lname = data[0].lastname;
        const emails = data[0].email;
        const skillsData = data[0].skill;

        setImageDatas(base64Data);
        setFirstname(fname);
        setlastname(lname);
        setFirstemail(emails);

        // Convert skills object to an array
        const skillsArray = Object.keys(skillsData).map((key) => skillsData[key]);
        setSkills(skillsArray);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='card-shadow rounded mt-3 mb-5 pb-4 bg-danger'>
        <div className="p-3">
          <Row className="profile-image d-flex justify-content-between">
            <Col lg={6} md={12} className='d-flex justify-content-center align-items-center mt-3 mb-4'>
              <img style={{ width: "200px", height: "200px" }} className="rounded-circle" src={imageData} alt='profile' />
            </Col>
            <Col lg={6} md={12} className='ps-3 mt-3 text-light '>
              <h3>Objective</h3>
              <p style={{ textAlign: 'justify' }}>To create reliable and efficient solutions by writing a high-quality code and collaborating with team members.</p>
            </Col>
          </Row>
          <div className="profile-details text-light">
            <h2>{firstname} {lastname}</h2>
            <p>Occupation: Developer</p>
            <p>Email: {email} </p>
            <div className='skills'>
              <h4>Skills</h4>
              {skills.map((skill, index) => (
                <Skill key={index} name={skill} percentage={(index + 6.7) * 10} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile;
