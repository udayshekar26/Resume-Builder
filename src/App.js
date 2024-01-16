import logo from './logo.svg';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './components/Navbar';
// import ResumeTemplates from './components/ResumeTemplates';



// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <ResumeTemplates/>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ResumeTemplates from './components/ResumeTemplates';
import FormPage from './components/FormPage'; // Import FormPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ResumeTemplates />} />
          <Route path="/form-filling" element={<FormPage />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
