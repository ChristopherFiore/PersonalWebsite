import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'; 
import profilePic from './assets/profilePic.jpg'; 
import resume from './assets/ChristopherFioreResume.pdf';

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredResume, setHoveredResume] = useState(false); 

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
    padding: '40px 20px',
  };

  const welcomeTextStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '2%',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
  };

  const profilePicStyle = {
    width: '250px',
    height: '250px', 
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '25px',
    boxShadow: '0 2px 10px rgba(255, 255, 255, 0.15)', // Subtle shadow
    border: '2px solid white', // Outline
  };

  const cardStyle = (isHovered) => ({
    backgroundColor: '#1c1c1c',
    fontSize: '1.25rem',
    color: '#f8f9fa',
    transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 15px rgba(255, 255, 255, 0.2)' : '0 2px 5px rgba(255, 255, 255, 0.1)', // Toned down shadow
    border: '2px solid white', // Outline for cards
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

  return (
    <Container fluid style={gradientBackground}>
      <div style={navStyle}>
        <Link to="/PersonalWebsite" style={linkStyle}>Home</Link>
        <span>/</span>
        <a
          href={resume}
          download
          style={linkStyle}
          onMouseEnter={() => setHoveredResume(true)}
          onMouseLeave={() => setHoveredResume(false)}
        >
          <FaDownload style={{ marginRight: '0.5rem' }} />
          Resume
        </a>
        <span>/</span>
        <Link to="/contact" style={linkStyle}>Contact me</Link>
      </div>

      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8}>
          <section>
            <p style={{ marginTop: '3%' }}>Hi! I'm</p>
            <h1 style={welcomeTextStyle}>Christopher Fiore</h1>
            <p style={paragraphStyle}>
              A passionate software developer with an interest in front end development, service software, and game design. Here's some projects I've been working on.
            </p>
            <img src={profilePic} alt="Christopher Fiore" style={profilePicStyle} />
          </section>
        </Col>
      </Row>

      <Row className="w-100 justify-content-center">
        {['TransLink Live Service Tool', 'Python 3D Voxel Engine', 'Computer Retail Website', 'This Website!'].map((project, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card
              as={Link}
              to={`/project${index + 1}`}
              style={cardStyle(hoveredItem === index)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="h-100 text-decoration-none text-light"
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

      <div style={{ position: 'absolute', top: '2%', right: '2%' }}>
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
