import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import websiteImage from '../assets/personalWebsite.png';

const PersonalWebsite = () => {
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

  const backButtonStyle = {
    fontSize: '6rem',
    fontWeight: 'bold',
    position: 'absolute',
    top: '20px',
    left: '40px',
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
        to="/"
        style={backButtonStyle}
        onMouseEnter={() => setIsHovered(true)} // Handle hover in
        onMouseLeave={() => setIsHovered(false)} // Handle hover out
      >
        &larr;
      </Link>

      <Row className="text-center mb-4" style={{ marginTop: '5%' }}>
        <Col>
          <h1 style={titleStyle}>Personal Website</h1>
          <p style={descriptionStyle}>
            Welcome to my personal website! Here you'll find information about my projects, skills, and experiences.
            Feel free to explore and reach out if you have any questions!
          </p>
        </Col>
      </Row>

      <Row className="text-center mb-4">
          <Col>
              <div style={windowStyle}>
                  <img src={websiteImage} alt="Personal Website Preview" width="100%" />
              </div>
          </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Features</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Real-time updates on projects</li>
            <li>User-friendly interface</li>
            <li>Portfolio of my work</li>
            <li>Contact information</li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Technology Stack</h2>
          <p>React, Node.js, JavaScript</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalWebsite;
