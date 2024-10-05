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

  return (
    <Container fluid style={gradientBackground} className="d-flex flex-column justify-content-center align-items-center">
      <Row className="text-center mb-4">
        <Col>
          <h1 style={titleStyle}>TranslinkApp</h1>
          <p style={descriptionStyle}>
            TranslinkApp is a project that helps users plan their journeys using public transportation efficiently. 
            With real-time updates and user-friendly interfaces, it enhances the travel experience.
          </p>
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
          <p>React, Node.js, Express, MongoDB</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TranslinkApp;
