import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const gradientBackground = {
    background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)',
    minHeight: '100vh',
    color: 'white',
    position: 'relative',
  };

  const welcomeTextStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
  };

  const projectItemStyle = (isHovered) => ({
    backgroundColor: 'transparent',
    borderColor: '#555',
    fontSize: '1.25rem',
    color: isHovered ? '#e0e0e0' : '#f8f9fa',
    textDecoration: 'underline',
    padding: '1rem',
    marginBottom: '1.5rem',
    transition: 'transform 0.3s, background-color 0.3s',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    cursor: 'pointer',
  });

  const iconStyle = (isHovered) => ({
    color: isHovered ? '#e0e0e0' : 'lightgrey',
    fontSize: '2rem',
    marginLeft: '1rem',
    transition: 'transform 0.3s, color 0.3s',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    cursor: 'pointer',
  });

  const cornerBorderStyle = {
    position: 'absolute',
    borderColor: '#ff5722',
    borderStyle: 'solid',
    zIndex: 10,
  };

  const topLeftBorder = {
    top: 0,
    left: 0,
    width: '140px',
    height: '140px',
    borderWidth: '15px 0 0 15px',
  };

  const bottomRightBorder = {
    bottom: 0,
    right: 0,
    width: '120px',
    height: '120px',
    borderWidth: '0 15px 15px 0',
  };

  return (
    <Container fluid style={gradientBackground} className="d-flex">
      <div style={{ ...cornerBorderStyle, ...topLeftBorder }}></div>
      <div style={{ ...cornerBorderStyle, ...bottomRightBorder }}></div>

      <Row className="w-100 align-items-center">
        <Col md={6} className="p-5">
          <section className="text-left">
            <h1 style={welcomeTextStyle}>Welcome</h1>
            <p style={paragraphStyle}>
              Hi, I'm Chris, a passionate software developer. Here's a list of projects I've been working on.
            </p>
          </section>
        </Col>

        <Col md={5} className="p-5">
          <section>
            <h2 className="text-center mb-4">Projects</h2>
            <ListGroup variant="flush" className="text-center">
              {['Project 1 - A brief description of what it does.', 'Project 2 - A brief description of what it does.', 'Project 3 - A brief description of what it does.'].map((project, index) => (
                <ListGroup.Item
                  key={index}
                  style={projectItemStyle(hoveredItem === index)}
                  className="border-light"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to={`/project${index + 1}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {project}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </section>
        </Col>
      </Row>

      {/* Icons Section */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
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
          href="https://linkedin.com/in/your-username"
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

export default Home;
