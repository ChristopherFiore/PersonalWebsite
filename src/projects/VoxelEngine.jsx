import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import voxelVideo from '../assets/voxelEngineVideo.mp4';

const VoxelEngine = () => {
  const [isHovered, setIsHovered] = useState(false);

  const gradientBackground = {
    background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)',
    minHeight: '100vh',
    color: 'white',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
  };

  const windowStyle = {
    border: '2px solid #ffffff',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    padding: '20px',
    maxWidth: '1000px',
    margin: '20px auto',
    backgroundColor: '#333333',
  };

  const linkStyle = {
    color: '#007bff', // Bootstrap's default link color
    textDecoration: 'underline',
  };

  const backButtonStyle = {
    fontSize: '6rem',
    fontWeight: 'bold',
    position: 'absolute',
    top: '3%',
    left: '3%',
    cursor: 'pointer',
    color: isHovered ? '#ff5722' : 'white', // Change color on hover
    textDecoration: 'none',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)', // Scale effect on hover
    transformOrigin: 'top left', // Ensure scaling occurs from the top-left corner
    transition: 'transform 0.3s, color 0.3s', // Smooth transition
  };

  return (
    <Container fluid style={gradientBackground} className="d-flex flex-column justify-content-center align-items-center p-3">
      {/* Back Button */}
      <Link
        to="/PersonalWebsite"
        style={backButtonStyle}
        onMouseEnter={() => setIsHovered(true)} // Handle hover in
        onMouseLeave={() => setIsHovered(false)} // Handle hover out
      >
        &larr;
      </Link>

      <Row className="text-center mb-4" style={{ marginTop: '5%' }}>
        <Col>
          <h1 style={titleStyle}>Python 3D Voxel Engine</h1>
          <p style={descriptionStyle}>
            Through my interest of how low level 3D graphics are constructed, I made a 3D python voxel engine.
            Feel free to check out the source code on{' '}
            <a href="https://github.com/ChristopherFiore/PythonVoxelEngine" target="_blank" rel="noopener noreferrer" style={linkStyle}> 
            Github
            </a>{'.'}
          </p>
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col>
          <div style={windowStyle}>
            <video width="100%" autoPlay loop muted>
              <source src={voxelVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Features</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Rendering Techniques</li>
            <li>Coloured Voxels with static lighting</li>
            <li>Explorable environment</li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Technology Stack</h2>
          <p>Python, OpenGL, Pygame, Numpy</p>
        </Col>
      </Row>
    </Container>
  );
};

export default VoxelEngine;
