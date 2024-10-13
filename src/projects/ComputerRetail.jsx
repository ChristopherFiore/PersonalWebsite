import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import computerRetailVideo from '../assets/retailComputerVideo.mp4';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'; 
import resume from '../assets/ChristopherFioreResume.pdf';

const ComputerRetail = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

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

  const githubLinkStyle = {
    color: isGithubHovered ? '#0056b3' : '#007bff',
    textDecoration: isGithubHovered ? 'underline' : 'none',
    transition: 'color 0.3s, text-decoration 0.3s',
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
    { name: 'JavaScript', level: 20 },
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 70 },
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
          <h1 style={titleStyle}>Computer Retail Website</h1>
          <p style={descriptionStyle}>
            Welcome to my creation of a retail computer website! Through my personal interest in computers and my professional experience
            of creating websites, I decided to make my own computer retail website. Feel free to navigate to my{' '}
            <a
              href="https://github.com/ChristopherFiore/RetailComputerWebsite"
              target="_blank"
              rel="noopener noreferrer"
              style={githubLinkStyle}
              onMouseEnter={() => setIsGithubHovered(true)}
              onMouseLeave={() => setIsGithubHovered(false)}
            >
              GitHub
            </a>{' '}
            for a look at the source code.
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
            <li>JavaScript functionality for forms and adding items to cart</li>
            <li>Responsiveness through various HTML and CSS features.</li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Technology Stack</h2>
          <p>JavaScript, HTML, CSS</p>
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

export default ComputerRetail;
