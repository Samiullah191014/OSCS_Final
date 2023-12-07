import React from 'react';
import './LessonPage.css'; // Import custom CSS file for styling

const LessonPage = ({ lessons }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Study Material</h1>
      <table className="table table-bordered table-striped mt-5">
        <thead>
          <tr>
            <th>Lesson</th>
            <th>Description</th>
            <th>Download PDF</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson, index) => (
            <tr key={index}>
              <td>{lesson.lesson}</td>
              <td>{lesson.description}</td>
              <td>
                {/* Apply custom class for styled button */}
                <a href={lesson.pdfLink} target="_blank" rel="noopener noreferrer" className="btn-download-pdf">
                  Download PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonPage;
