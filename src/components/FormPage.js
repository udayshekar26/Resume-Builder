// FormPage.js
import React, { useState } from 'react';

const FormPage = () => {
  const [selectedSection, setSelectedSection] = useState('personalInfo');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted!');
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'personalInfo':
        return (
          <div>
            <h3>Personal Info Section</h3>
            {/* Add personal info fields here */}
          </div>
        );
      case 'workExperience':
        return (
          <div>
            <h3>Work Experience Section</h3>
            {/* Add work experience fields here */}
          </div>
        );
      case 'education':
        return (
          <div>
            <h3>Education Section</h3>
            {/* Add education fields here */}
          </div>
        );
      // Add more sections as needed
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', marginRight: '20px' }}>
        {/* List of Sections */}
        <ul>
          <li onClick={() => setSelectedSection('personalInfo')}>Personal Info</li>
          <li onClick={() => setSelectedSection('workExperience')}>Work Experience</li>
          <li onClick={() => setSelectedSection('education')}>Education</li>
          {/* Add more section items as needed */}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        {/* Render the selected section content */}
        {renderSection()}
      </div>
    </div>
  );
};

export default FormPage;
