// import React, { useState } from 'react';
// import Dropzone from 'react-dropzone';
// import axios from 'axios';


// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleDrop = (acceptedFiles) => {
//     setFiles(acceptedFiles);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       files.forEach((file) => formData.append('files', file));

//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//           setUploadProgress(progress);
//         },
//       });

//       // Handle the response, e.g., show an alert on success
//       if (response.status === 200) {
//         alert('Assignment submitted successfully!');
//       }

//       // Clear the uploaded files
//       setFiles([]);

//       // Reset the upload progress
//       setUploadProgress(0);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card p-4">
//             <h2 className="mb-4">Upload Your Assignment</h2>
//             <Dropzone onDrop={handleDrop}>
//               {({ getRootProps, getInputProps }) => (
//                 <div
//                   {...getRootProps({
//                     className: 'dropzone p-4 text-center',
//                     style: { border: '2px dashed #ced4da', cursor: 'pointer' },
//                   })}
//                 >
//                   <input {...getInputProps()} />
//                   <p>Drag and drop files here, or click to select files</p>
//                 </div>
//               )}
//             </Dropzone>
//             {files.length > 0 && (
//               <div>
//                 <h4 className="mt-4">Selected Files:</h4>
//                 <ul className="list-group">
//                   {files.map((file) => (
//                     <li key={file.name} className="list-group-item">
//                       {file.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {uploadProgress > 0 && (
//               <div className="mt-4">
//                 <strong>Uploading:</strong> {uploadProgress}%
//                 <div className="progress">
//                   <div
//                     className="progress-bar progress-bar-striped progress-bar-animated"
//                     role="progressbar"
//                     style={{ width: `${uploadProgress}%` }}
//                     aria-valuenow={uploadProgress}
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   />
//                 </div>
//               </div>
//             )}
//             <button
//               className="btn btn-primary mt-4"
//               onClick={handleUpload}
//               disabled={files.length === 0}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;
























import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const FileUpload = ({ courseName }) => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('courseName', courseName); // Include the course name in the form data
      files.forEach((file) => formData.append('files', file));

      const response = await axios.post('http://localhost:5000/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(progress);
        },
      });

      // Handle the response, e.g., show an alert on success
      if (response.status === 200) {
        alert('Assignment submitted successfully!');
      }

      // Clear the uploaded files
      setFiles([]);

      // Reset the upload progress
      setUploadProgress(0);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // ... Your existing code ...

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
          <h2 className="mb-4">Upload Your Assignment</h2>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps({
                    className: 'dropzone p-4 text-center',
                    style: { border: '2px dashed #ced4da', cursor: 'pointer' },
                  })}
                >
                  <input {...getInputProps()} />
                  <p>Drag and drop files here, or click to select files</p>
                </div>
              )}
            </Dropzone>
            {files.length > 0 && (
              <div>
                <h4 className="mt-4">Selected Files:</h4>
                <ul className="list-group">
                  {files.map((file) => (
                    <li key={file.name} className="list-group-item">
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {uploadProgress > 0 && (
              <div className="mt-4">
                <strong>Uploading:</strong> {uploadProgress}%
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: `${uploadProgress}%` }}
                    aria-valuenow={uploadProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            )}
              
            <button
              className="btn btn-primary mt-4"
              onClick={handleUpload}
              disabled={files.length === 0}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
