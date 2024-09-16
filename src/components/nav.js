import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NewNavbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkStyle = {
    position: 'relative',
    textDecoration: 'none',
    color: '#333',
    fontWeight: '600',
    marginRight: '1rem',
    display: 'inline-block',
    transition: 'color 0.3s ease, transform 0.3s ease',  // Adding smooth transition for color and scale
  };

  const navLinkAfterStyle = {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '0%',
    height: '2px',
    background: '#aaa',
    transition: 'width 0.3s ease, background 0.3s ease',
  };

  const handleMouseEnter = (event) => {
    const link = event.currentTarget;
    const afterElement = link.querySelector('span');
    if (afterElement) {
      afterElement.style.width = '100%';
      afterElement.style.background = '#000'; // Set background to black on hover
      link.style.color = '#000'; // Change text color to black on hover
      link.style.transform = 'scale(1.05)'; // Slight scale-up on hover
    }
  };

  const handleMouseLeave = (event) => {
    const link = event.currentTarget;
    const afterElement = link.querySelector('span');
    if (afterElement) {
      afterElement.style.width = '0%';
      afterElement.style.background = '#aaa'; // Reset background color
      link.style.color = '#333'; // Reset text color
      link.style.transform = 'scale(1)'; // Reset scale
    }
  };

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: 'whitesmoke', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Navbar.Brand href="#" style={{ fontSize: '2rem', fontWeight: '700', color: '#333' }}>
          Thiran360AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'Why Thiran', 'Thiran\'s Solution', 'What Thiran Can Do', 'Thiran\'s History'].map((text, index) => (
              <Nav.Link
                key={index}
                href={`#card_${index + 1}`}
                onClick={() => handleScroll(`card_${index + 1}`)}
                style={{ ...navLinkStyle }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {text}
                <span
                  style={{
                    ...navLinkAfterStyle,
                  }}
                />
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;
