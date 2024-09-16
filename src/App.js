import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/contactus';
import Folio from './components/Folio';
import NewNavbar from './components/nav';
import Cwithus from './chatwithus';
import Employee from './components/Employee'; // Import the new Employee component

function App() {
  return (
    <Router>
      <NewNavbar/>
      <Routes>
        <Route path="/" element={<Folio />} />
        <Route path="/employee/:name" element={<Employee />} /> {/* Updated route for Employee */}
      </Routes>
      <Cwithus/>
      <ContactUs/>
    </Router>
  );
}

export default App;
