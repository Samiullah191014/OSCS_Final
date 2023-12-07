import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import App_Bar from './App_Bar';
import {BsDownload} from "react-icons/bs"
import "./Assignment.mod.css";
const Assignments = () => {
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    // Fetch file collection data from the server
    axios.get('http://localhost:5000/files')
      .then((response) => {
        setFileData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching file data:', error);
      });
  }, []);

  const handleDownload = async (fileId, fileName) => {
    try {
      const response = await axios.get(`http://localhost:5000/download/${fileId}`, {
        responseType: 'blob', // Set the response type to 'blob' to handle file download
      });

      // Create a URL object from the response data
      const url = URL.createObjectURL(new Blob([response.data]));

      // Create an anchor element and set its attributes for file download
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);

      // Click the link to trigger file download
      link.click();

      // Clean up by removing the anchor element and revoking the URL object
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <>
      <div className="bgcolor23">
        <App_Bar />
        <div className="d-flex">
          <Header />
          <div className="container marginclass11">
            <h1>Assignments</h1>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>File Type</th>
                    <th>Course Name</th>
                    <th>Download</th> {/* New column for download button */}
                    {/* Add more table headers for additional fields if needed */}
                  </tr>
                </thead>
                <tbody>
                  {fileData.map((file) => (
                    <tr key={file._id}>
                      <td>{file.fileName}</td>
                      <td>{file.fileType}</td>
                      <td>{file.courseName}</td>
                      <td>
                        <button onClick={() => handleDownload(file._id, file.fileName)} className="btn btn-primary">
                          <BsDownload/>
                        </button>
                      </td>
                      {/* Add more table cells for additional fields if needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignments;
