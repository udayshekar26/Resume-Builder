// data.js
import image1 from "../resume templates images/1.jpg";
import image2 from "../resume templates images/2.jpg";
import image3 from "../resume templates images/3.jpg";
const resumeTemplates = [
    {
      id: 1,
      name: 'Simple Template',
      sections: ['Personal Information', 'Education', 'Experience', 'Skills'],
      imagePath: image1,
    },
    {
      id: 2,
      name: 'Creative Template',
      sections: ['Summary', 'Projects', 'Education', 'Skills'],
      imagePath: image2,
    },
    {
        id: 3,
        name: 'Sportive Template',
        sections: ['Summary', 'Projects', 'Education', 'Skills'],
        imagePath: image3,
      }
    // Add more templates as needed
  ];
  
  export default resumeTemplates;
  