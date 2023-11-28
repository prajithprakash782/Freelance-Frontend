import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CgAddR } from 'react-icons/cg';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

function Add() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [project, setProject] = useState('');
  const [input1, setInput1] = useState(''); // New state for the first input
  const [input2, setInput2] = useState('');

  const handleClose = () => {
    setShow(false);
    setFile(null);
    setInput1('');
    setInput2('');
  };

  const handleShow = () => setShow(true);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFile(file); // Store the file itself
      setProject(reader.result); // Store the base64 representation of the file
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post('https://freelance-backend-yfpi.onrender.com/users', {
        project: project,
        link1: input1,
        tech: input2,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }

    console.log(project);

    handleClose();
    window.location.reload();
  };

  return (
    <>
      <div className='card shadow mt-3 p-4'>
        <div className='d-flex justify-content-between ' >
          <h1 className='text-primary'>My<span className='text-danger'> Works</span> </h1>
          <Button className='btn btn-outline-danger' onClick={handleShow}>
            <CgAddR />
          </Button>
        </div>

        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title><h3 className='text-danger'><i class="fa-solid fa-upload me-2"></i>
              <span className='text-primary'>Upload</span>
            </h3></Modal.Title>
          </Modal.Header>
          <Modal.Body className='card shadow rounded-bottom bg-primary' style={{ color: 'white' }}>
            <p>Please fill the following details</p>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={handleImage} />
            </Form.Group>
            <Form.Group controlId="input1" className="mb-3">
              <Form.Label>Project Link</Form.Label>
              <Form.Control type="text" placeholder="Enter the project link" value={input1} onChange={(e) => setInput1(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="input2" className="mb-3">
              <Form.Label>Technologies Used</Form.Label>
              <Form.Control type="text" placeholder="Techonology used" value={input2} onChange={(e) => setInput2(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outline-primary" onClick={handleUpload}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  );
}

export default Add;
