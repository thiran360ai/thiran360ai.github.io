import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faMessage, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactUsFooter = () => {
  const footerStyle = {
    paddingTop: '90px',
    padding: '30px 0',
    backgroundColor: '#e0e0e0',
  };

  const locationSectionStyle = {
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '8px',
  };

  const headingStyle = {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '1rem',
  };

  const textMutedStyle = {
    color: '#555',
    marginBottom: '0.5rem',
    fontSize: '19px',
    textAlign: 'left',
  };

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const inputIconStyle = {
    backgroundColor: '#e9ecef',
    border: '1px solid #ced4da',
    borderRight: 'none',
    padding: '0.5rem',
    borderRadius: '5px 0 0 5px',
  };

  const inputStyle = {
    color: '#333',
    border: '1px solid #ced4da',
    padding: '0.3rem',
    borderRadius: '0 5px 5px 0',
    width: '100%',
    fontSize: '16px',
    height:"2.6rem",
    backgroundColor: '#fff',
  };

  const textareaStyle = {
    ...inputStyle,
    borderRadius: '5px',
    height: '80px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div style={locationSectionStyle}>
              <h2 style={headingStyle}>Our Location</h2>
              <p style={textMutedStyle}>
                <FontAwesomeIcon icon={faLocationDot} color="#007bff" /> Madivala, Bangalore-560068.
              </p>
              <p style={textMutedStyle}>
                <FontAwesomeIcon icon={faEnvelope} color="#007bff" /> info@thiran360ai.com
              </p>
              <p style={textMutedStyle}>
                <FontAwesomeIcon icon={faPhone} color="#007bff" /> +91 9659245977
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <div style={inputGroupStyle}>
                <span style={inputIconStyle}>
                  <FontAwesomeIcon icon={faUser} color="#007bff" />
                </span>
                <input type="text" style={inputStyle} placeholder="Your Name" />
              </div>
              <div style={inputGroupStyle}>
                <span style={inputIconStyle}>
                  <FontAwesomeIcon icon={faEnvelope} color="#007bff" />
                </span>
                <input type="email" style={inputStyle} placeholder="Your Email" />
              </div>
              <div className="form-group" style={{marginBottom:"10px"}}>
                <textarea className="form-control" style={textareaStyle} placeholder="Your Message"></textarea>
              </div>
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
              >
                <FontAwesomeIcon icon={faMessage} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
