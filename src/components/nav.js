import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NewNavbar = ({ cardRefs }) => {
  const 
  handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkStyle = {
    position: 'relative',
    textDecoration: 'none',
    color: '#fff', // Text color
    fontWeight: '600',
    marginRight: '1rem',
    display: 'inline-block',
    transition: 'color 0.3s ease, transform 0.3s ease',
  };

  // Define navLinkAfterStyle for underline effect
  const navLinkAfterStyle = {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '0%',
    height: '2px',
    background: '#fff', // Underline color
    transition: 'width 0.3s ease, background 0.3s ease',
  };

  const handleMouseEnter = (event) => {
    const link = event.currentTarget;
    const afterElement = link.querySelector('span');
    if (afterElement) {
      afterElement.style.width = '100%';
      afterElement.style.background = '#fff'; // Underline color on hover
      link.style.color = '#fff'; // Change text color to white on hover
      link.style.transform = 'scale(1.05)'; // Slight scale-up on hover
    }
  };

  const handleMouseLeave = (event) => {
    const link = event.currentTarget;
    const afterElement = link.querySelector('span');
    if (afterElement) {
      afterElement.style.width = '0%';
      afterElement.style.background = '#fff'; // Reset underline color
      link.style.color = '#fff'; // Reset text color
      link.style.transform = 'scale(1)'; // Reset scale
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Frosted glass effect
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
        borderRadius: '15px',
        marginTop: '10px',
      }}
    >
      <Container>
        <Navbar.Brand href="#" style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>
          Thiran360AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Use the cardRefs passed to dynamically scroll to each section */}
            <Nav.Link
              style={navLinkStyle}
              onClick={() => handleScroll(cardRefs.card1)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Home
              <span style={navLinkAfterStyle}></span>
            </Nav.Link>
            <Nav.Link
              style={navLinkStyle}
              onClick={() => handleScroll(cardRefs.card2)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Why Thiran
              <span style={navLinkAfterStyle}></span>
            </Nav.Link>
            <Nav.Link
              style={navLinkStyle}
              onClick={() => handleScroll(cardRefs.card3)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Thiran's Solution
              <span style={navLinkAfterStyle}></span>
            </Nav.Link>
            <Nav.Link
              style={navLinkStyle}
              onClick={() => handleScroll(cardRefs.card4)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              What Thiran Can Do
              <span style={navLinkAfterStyle}></span>
            </Nav.Link>
            <Nav.Link
              style={navLinkStyle}
              onClick={() => handleScroll(cardRefs.card5)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Thiran's History
              <span style={navLinkAfterStyle}></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;
