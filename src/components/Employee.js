import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const baseStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    maxWidth: '750px',
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  picture: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '10px',
  },
  name: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: '20px',
    color: '#007bff',
  },
  info: {
    fontSize: '18px',
    color: '#666',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  googleSheetButton: {
    backgroundColor: '#4285F4',
  },
  googleDocumentButton: {
    backgroundColor: '#DB4437',
  },
};

const Employee = () => {
  const { name } = useParams(); // Get the name from the URL parameter
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // Fetch the data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Normalize the name from the URL (convert to lowercase and remove spaces)
        const formattedName = name.toLowerCase().replace(/-/g, ' ');
        // Find the employee by matching the name
        const employee = data.find((emp) => emp.name.toLowerCase() === formattedName);
        setEmployeeData(employee);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [name]);

  if (!employeeData) {
    return <div>Loading...</div>; // Show a loading state if the data is still being fetched
  }

  return (
    <div style={baseStyles.container}>
      <div style={baseStyles.card}>
        <img
          src={employeeData.picture}
          alt={employeeData.name}
          style={baseStyles.picture}
        />
        <div style={baseStyles.details}>
          <h2 style={baseStyles.name}>{employeeData.name}</h2>
          <p style={baseStyles.role}>Designation: {employeeData.role}</p>
          <p style={baseStyles.info}>Date of Join: {employeeData.joiningDate}</p>
          <div style={baseStyles.buttonContainer}>
            <button style={{ ...baseStyles.button, ...baseStyles.googleSheetButton }}>
              Google Sheet
            </button>
            <button style={{ ...baseStyles.button, ...baseStyles.googleDocumentButton }}>
              Google Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
