import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import websiteImage from '../assets/personalWebsite.png';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'; 
import resume from '../assets/ChristopherFioreResume.pdf';

const PersonalWebsite = () => {
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
    { name: 'React', level: 85 },
    { name: 'Bootstrap', level: 60 },
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
          <h1 style={titleStyle}>Personal Website</h1>
          <p style={descriptionStyle}>
            Welcome to the website you are currently using! Here you'll find information about my projects, skills, and experiences.
            I created this portfolio website to showcase my front-end development skills and provide a way for people and employers
            to engage with my work and talents.
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
            <img src={websiteImage} alt="Personal Website Preview" width="100%" />
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Features</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Real-time updates on projects</li>
            <li>Portfolio of my work</li>
            <li>Contact information</li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Technology Stack</h2>
          <p>React, Bootstrap, Node.js, JavaScript</p>
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

export default PersonalWebsite;
