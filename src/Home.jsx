import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from './assets/profilePic.jpg'; // Update with the correct path to your image

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const gradientBackground = {
    background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)',
    minHeight: '100vh',
    color: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '40px',
    paddingBottom: '40px',
  };

  const welcomeTextStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    marginBottom: '20px', // Adjusted margin to fit the image
  };

  const profilePicStyle = {
    width: '200px', // Adjust size as needed
    height: '200px', // Adjust size as needed
    borderRadius: '50%', // This makes the image circular
    objectFit: 'cover', // Ensures the image covers the area without distortion
    marginBottom: '30px', // Space below the image
  };

  const cardStyle = (isHovered) => ({
    backgroundColor: '#1c1c1c',
    borderColor: '#555',
    fontSize: '1.25rem',
    color: '#f8f9fa',
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
    <Container fluid style={gradientBackground}>
      {/* Keep the border elements */}
      <div style={{ ...cornerBorderStyle, ...topLeftBorder }}></div>
      <div style={{ ...cornerBorderStyle, ...bottomRightBorder }}></div>

      {/* Main content, centrally aligned */}
      <Row className="w-100 justify-content-center">
        <Col md={8}>
          <section>
            <h1 style={welcomeTextStyle}>Welcome</h1>
            <p style={paragraphStyle}>
              Hi, I'm Christopher Fiore, a passionate software developer. Here's some projects I've been working on.
            </p>
            {/* Profile Picture */}
            <img src={profilePic} alt="Christopher Fiore" style={profilePicStyle} />
          </section>
        </Col>
      </Row>

      {/* Projects Title */}
      <Row className="w-100 justify-content-center">
        <Col md={8} className="text-center mb-4">
          <h2>Projects</h2>
        </Col>
      </Row>

      {/* Project Cards in a 2x2 Grid */}
      <Row className="w-100 justify-content-center">
        {['TransLink Live Service App', 'Python 3D Voxel Engine', 'Computer Retail Website', 'Something else'].map((project, index) => (
          <Col sm={6} md={6} lg={4} key={index} className="mb-4">
            {/* Use a clickable Card component */}
            <Card
              as={Link}  // This is key: it makes the entire Card behave as a Link
              to={`/project${index + 1}`}
              style={cardStyle(hoveredItem === index)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="h-100 text-decoration-none text-light"  // Ensures the text styling is correct for Links
            >
              <Card.Body>
                <Card.Title>{project}</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
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

export default Home;
