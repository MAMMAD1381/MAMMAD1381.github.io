import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

class ResumeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Personal and professional information
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      education: 'Bachelor of Science in Computer Science',
      university: 'University of Example',
      graduation: 'May 2022',
      experience: 'Software Developer Intern',
      company: 'XYZ Company',
      dates: 'May 2021 - August 2021'
    };
  }

  render() {
    return (
      <div>
        {/* Your resume component */}
        <ResumePDF {...this.state} />

        {/* Button to trigger PDF generation */}
        <PDFDownloadLink document={<ResumePDF {...this.state} />} fileName="resume.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>
    );
  }
}

export default ResumeGenerator;
