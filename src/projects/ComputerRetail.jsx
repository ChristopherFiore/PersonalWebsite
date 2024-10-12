import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import computerRetailVideo from '../assets/retailComputerVideo.mp4';

const ComputerRetail = () => {
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

  const linkStyle = {
    color: '#007bff', // Bootstrap's default link color
    textDecoration: 'underline',
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
    color: isHovered ? '#ff5722' : 'white',
    textDecoration: 'none',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    transformOrigin: 'top left',
    transition: 'transform 0.3s, color 0.3s',
  };

  return (
    <Container fluid style={gradientBackground} className="d-flex flex-column justify-content-center align-items-center p-3">
      {/* Back Button */}
      <Link
        to="/"
        style={backButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        &larr;
      </Link>

      <Row className="text-center mb-4" style={{ marginTop: '5%' }}>
        <Col>
          <h1 style={titleStyle}>Computer Retail Website</h1>
          <p style={descriptionStyle}>
            Welcome to my creation of a retail computer website! Through my personal interest of computers and my professional experience
            of creating websites, I decided to make my own computer retail website. Feel free to navigate to my{' '}
            <a href="https://github.com/ChristopherFiore/RetailComputerWebsite" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              GitHub
            </a>{' '}
            for a look at the source code.
          </p>
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col>
          <div style={windowStyle}>
            <video width="100%" autoPlay loop muted>
              <source src={computerRetailVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Features</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Smooth and responsive navigation</li>
            <li>User-friendly interface</li>
            <li>Javascript functionality for forms and adding items to cart</li>
            <li>Repsonsiveness through various HTML and CSS features. </li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Technology Stack</h2>
          <p>JavaScript, HTML, CSS</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ComputerRetail;
