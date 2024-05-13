import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ResumeGenerator() {
  const [resumeHTML, setResumeHTML] = useState('');

  const generateResume = () => {
    // Fetch data from an API or predefined JSON object
    const data = {
      name: 'John Doe',
      projects: ['Project 1', 'Project 2'],
      profile: 'Full-stack Developer',
      // Add more data fields as needed
    };
  
    // Define JSX template for resume content
    const resumeContent = (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.profile}</h2>
        <h3>Projects:</h3>
        <ul>
          {data.projects.map(project => <li key={project}>{project}</li>)}
        </ul>
        {/* Add more sections as needed */}
      </div>
    );
  
    // Set the JSX template as resume HTML
    setResumeHTML(resumeContent);
  };
  

  const downloadPDF = () => {
    // Convert HTML to canvas
    html2canvas(document.querySelector('#resume')).then(canvas => {
      // Convert canvas to PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div>
      <button onClick={generateResume}>Generate Resume</button>
      <button onClick={downloadPDF}>Download PDF</button>
      <div id="resume" dangerouslySetInnerHTML={{ __html: resumeHTML }} />
    </div>
  );
}

export default ResumeGenerator;
