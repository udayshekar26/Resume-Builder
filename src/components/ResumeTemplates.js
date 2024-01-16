// // ResumeTemplates.js
// import React from 'react';
// import resumeTemplates from './data';

// const ResumeTemplates = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflowX: 'auto' }}>
//       {resumeTemplates.map((template) => (
//         <div key={template.id} style={{ margin: '10px', listStyleType: 'none', textAlign: 'center' }}>
//           <strong>{template.name}</strong>
//           <img src={template.imagePath} alt={`Template ${template.name}`} style={{ maxWidth: '200px', maxHeight: '200px', display: 'block', margin: '10px auto' }} />
//           {/* Additional content here if needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResumeTemplates;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import resumeTemplates from './data';

const ResumeTemplates = () => {
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleUseTemplate = (template) => {
    console.log(`Template ${template.name} selected`);

    // Navigate to the form-filling page and pass the selected template data
    navigate('/form-filling', { state: { templateData: template } });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflowX: 'auto' }}>
      {resumeTemplates.map((template) => (
        <div
          key={template.id}
          style={{
            margin: '10px',
            position: 'relative',
            textAlign: 'center',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setHoveredTemplate(template.id)}
          onMouseLeave={() => setHoveredTemplate(null)}
        >
          <strong>{template.name}</strong>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {hoveredTemplate === template.id && (
              <button
                onClick={() => handleUseTemplate(template)}
                style={{
                  padding: '12px 20px',
                  border: 'none',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  color: 'white',
                  cursor: 'pointer',
                  position: 'absolute',
                  zIndex: 1,
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  transition: 'background-color 0.3s ease-in-out',
                }}
              >
                Use Template
              </button>
            )}
          </div>
          <img
            src={template.imagePath}
            alt={`Template ${template.name}`}
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
              display: 'block',
              margin: '10px auto',
              transition: 'filter 0.3s ease-in-out',
              filter: hoveredTemplate !== template.id ? 'none' : 'blur(2px) opacity(99%)', // Decreased opacity to 25%
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplates;
