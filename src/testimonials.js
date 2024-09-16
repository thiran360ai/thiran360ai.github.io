import React from 'react';

const Testimonials = () => {
  const containerStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '60px 0',
  };

  const headingStyle = {
    color: 'black',
    fontSize: '40px',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginBottom: '40px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch', // Ensure cards are the same height
    flexWrap: 'nowrap',
    overflowX: 'auto',
    gap: '20px',
    padding: '0 20px',
  };

  const cardStyle = {
    border: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#fff',
    width: '250px',
    height: '350px',
    flex: '0 0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
  };

  const shineStyle = {
    position: 'absolute',
    top: 0,
    left: '-75%',
    width: '50%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.3)',
    transform: 'skewX(-25deg)',
    transition: 'all 0.5s',
    pointerEvents: 'none',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const cardBodyStyle = {
    padding: '20px',
    textAlign: 'left',
    flex: '1 0 auto',
  };

  const titleStyle = {
    fontSize: '19px',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#000',
  };

  const textStyle = {
    fontSize: '15px',
    color: '#000',
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, cardHoverStyle);
    e.currentTarget.querySelector('.shine').style.animation = 'shine-animation 0.75s forwards';
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, { transform: '', boxShadow: '' });
    e.currentTarget.querySelector('.shine').style.animation = '';
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        <div
          className="card team-card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="shine" style={shineStyle}></div>
          <img src="c1.jpg" alt="Eben Paul" style={imgStyle} />
          <div className="card-body" style={cardBodyStyle}>
            <h5 className="card-title" style={titleStyle}>Eben Paul</h5>
            <p className="card-text" style={textStyle}>★★★★★<br />Thank you for your outstanding work.</p>
          </div>
        </div>

        <div
          className="card team-card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="shine" style={shineStyle}></div>
          <img src="c2.jpeg" alt="Siddhu" style={imgStyle} />
          <div className="card-body" style={cardBodyStyle}>
            <h5 className="card-title" style={titleStyle}>Siddhu</h5>
            <p className="card-text" style={textStyle}>★★★★★<br />I deeply appreciate your exceptional work.</p>
          </div>
        </div>

        <div
          className="card team-card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="shine" style={shineStyle}></div>
          <img src="c3.jpeg" alt="Sathish Kumar" style={imgStyle} />
          <div className="card-body" style={cardBodyStyle}>
            <h5 className="card-title" style={titleStyle}>Sathish Kumar</h5>
            <p className="card-text" style={textStyle}>★★★★★<br />I am incredibly grateful for your outstanding work.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// Add this CSS in your global stylesheet or within a <style> tag in your component
const style = document.createElement('style');
style.textContent = `
@keyframes shine-animation {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 768px) {
  .card.team-card {
    width: 200px;
    height: 250px;
  }

  .shine {
    display: none;
  }

  .card-title {
    font-size: 18px;
  }

  .card-text {
    font-size: 14px;
  }
}
`;
document.head.append(style);
