import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TranslinkApp = () => {
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

  return (
    <Container fluid style={gradientBackground} className="d-flex flex-column justify-content-center align-items-center p-3"> {/* Added padding class */}
      <Row className="text-center mb-4" style={{ marginTop: '50px' }}>
        <Col>
          <h1 style={titleStyle}>TranslinkApp</h1>
          <p style={descriptionStyle}>
            TranslinkApp is a project that helps users plan their journeys using public transportation efficiently. 
            With real-time updates and user-friendly interfaces, it enhances the travel experience.
          </p>
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col>
          <div style={windowStyle}>
            <h2>Project Display</h2>
            <video width="100%" controls>
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Or, to display an image instead, use the following line: */}
            {/* <img src="your-image-url.jpg" alt="Project Preview" style={{ width: '100%', borderRadius: '10px' }} /> */}
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Features</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Real-time transit updates</li>
            <li>User-friendly interface</li>
            <li>Route planning</li>
            <li>Integration with multiple transport services</li>
          </ul>
        </Col>
      </Row>
      
      <Row className="text-center">
        <Col>
          <h2>Technology Stack</h2>
          <p>React, Node.js, Javascript</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TranslinkApp;
