import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import translinkVideo from "../assets/translinkVideo.mp4";
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'; 
import resume from '../assets/ChristopherFioreResume.pdf';

const TranslinkApp = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

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

  const navStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    fontSize: '1.25rem',
    display: 'flex',
    gap: '15px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s',
  };

  const iconStyle = (isHovered) => ({
    color: isHovered ? '#e0e0e0' : 'lightgrey',
    fontSize: '2rem',
    marginLeft: '1rem',
    transition: 'transform 0.3s, color 0.3s',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    cursor: 'pointer',
  });

  // Histogram data
  const technologies = [
    { name: 'Node.js', level: 70 },
    { name: 'JavaScript', level: 90 },
  ];

  return (
    <Container fluid style={gradientBackground} className="d-flex flex-column justify-content-center align-items-center p-3">

      <div style={navStyle}>
        <Link to="/PersonalWebsite" style={linkStyle}>Home</Link>
        <span>/</span>
        <a
          href={resume}
          download
          style={linkStyle}
        >
          <FaDownload style={{ marginRight: '0.5rem' }} />
          Resume
        </a>
        <span>/</span>
        <Link to="/contact" style={linkStyle}>Contact me</Link>
      </div>

      <Row className="text-center mb-4" style={{ marginTop: '5%' }}>
        <Col>
          <h1 style={titleStyle}>Translink Live Service Tool</h1>
          <p style={descriptionStyle}>
            Translink live service tool is a project that helps users plan their journeys using public transportation efficiently.
            With real-time updates and user-friendly interfaces, it enhances the travel experience for bus lines across QLD.
          </p>
        </Col>
      </Row>

      {/* Histogram Section */}
      <Row className="text-center mb-4">
        <Col>
          <h2>Technology Usage</h2>
          {technologies.map((tech) => (
            <div key={tech.name} style={{ margin: '5px 0', textAlign: 'left' }}>
              <span style={{ marginRight: '10px' }}>{tech.name}</span>
              <div style={{
                backgroundColor: '#007bff',
                height: '25px',
                borderRadius: '5px',
                width: `${tech.level}%`,
                transition: 'width 0.3s',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              }} />
            </div>
          ))}
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col>
          <div style={windowStyle}>
            <video width="100%" autoPlay loop muted>
              <source src={translinkVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Features</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Real-time transit updates</li>
            <li>Route planning</li>
            <li>API Integration</li>
            <li>Integration with live transport data</li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Technology Stack</h2>
          <p>Node.js, Javascript</p>
        </Col>
      </Row>

      <div style={{ position: 'absolute', top: '2vh', right: '2vw' }}>
        <a
          href="https://github.com/ChristopherFiore"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle(hoveredIcon === 'github')}
          onMouseEnter={() => setHoveredIcon('github')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-fiore-8b64702b5/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle(hoveredIcon === 'linkedin')}
          onMouseEnter={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FaLinkedin />
        </a>
      </div>
    </Container>
  );
};

export default TranslinkApp;
