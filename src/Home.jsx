import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";  // Import Link

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

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

  // Style for the corner borders
  const cornerBorderStyle = {
    position: 'absolute',
    borderColor: '#f8f9fa',  // Same light color as text
    borderStyle: 'solid',
    zIndex: 10,
  };

  const topLeftBorder = {
    top: 0,
    left: 0,
    width: '100px',
    height: '100px',
    borderWidth: '10px 0 0 10px',  // Border on the left and top
  };

  const bottomRightBorder = {
    bottom: 0,
    right: 0,
    width: '100px',
    height: '100px',
    borderWidth: '0 10px 10px 0',  // Border on the right and bottom
  };

  return (
    <Container fluid style={gradientBackground} className="d-flex">
      {/* Top-left border */}
      <div style={{ ...cornerBorderStyle, ...topLeftBorder }}></div>
      {/* Bottom-right border */}
      <div style={{ ...cornerBorderStyle, ...bottomRightBorder }}></div>

      <Row className="w-100 align-items-center">
        {/* Left Column: Welcome Message */}
        <Col md={6} className="p-5">
          <section className="text-left">
            <h1 style={welcomeTextStyle}>Welcome</h1>
            <p style={paragraphStyle}>
              Hi, I'm Chris, a passionate software developer. Here's a list of projects I've been working on.
            </p>
          </section>
        </Col>

        {/* Right Column: Projects */}
        <Col md={6} className="p-5">
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
    </Container>
  );
};

export default Home;
