

//also good 👇


// import React, { useState } from 'react';
// import './CourseVideos.css';
// import Navbar from './Navbar';
// import ScrollButton from './ScrollButton';
// import Footer from './Footer';
// import { useLocation } from 'react-router-dom';
// import LessonPage from './LessonPage';

// export const CourseVideos = () => {
//   const location = useLocation();
//   const filteredVideos = location.state?.videos || {};
//   const courseName = location.state?.course || ''; // Get the course name from the location state

//   const [activeVideo, setActiveVideo] = useState(0);

//   const handleVideoClick = (index, src, text) => {
//     setActiveVideo(index);
//     const mainVideo = document.querySelector('.main-video video');
//     const title = document.querySelector('.main-video .title');
//     mainVideo.src = src;
//     title.innerHTML = text;
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Use the courseName as the page heading */}
//       <h3 className='heading'>{courseName}</h3>
//       <div className='container-fluid vdContainer'>
//         <div className='main-video'>
//           <div className='video'>
//             <video src={filteredVideos.video1} controls muted autoPlay></video>
//             <h3 className='title'>0.1. Video title goes here</h3>
//           </div>
//         </div>

//         <div className='video-list'>
//           <div
//             className={`vid ${activeVideo === 0 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 0,
//                 filteredVideos.video1,
//                 '0.1. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video1} muted></video>
//             <h3 className='title'>0.1. Video title goes here</h3>
//           </div>

//           <div
//             className={`vid ${activeVideo === 1 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 1,
//                 filteredVideos.video2,
//                 '0.2. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video2} muted></video>
//             <h3 className='title'>0.2. Video title goes here</h3>
//           </div>

//           <div
//             className={`vid ${activeVideo === 2 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 2,
//                 filteredVideos.video3,
//                 '0.3. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video3} muted></video>
//             <h3 className='title'>0.3. Video title goes here</h3>
//           </div>

//           <div
//             className={`vid ${activeVideo === 3 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 3,
//                 filteredVideos.video4,
//                 '0.4. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video4} muted></video>
//             <h3 className='title'>0.4. Video title goes here</h3>
//           </div>
//         </div>
//       </div>


//          <LessonPage/>
      

//       <ScrollButton />
//       <Footer />
//     </>
//   );
// };

















































// last final 👇


// import React, { useState } from 'react';
// import './CourseVideos.css';
// import Navbar from './Navbar';
// import ScrollButton from './ScrollButton';
// import Footer from './Footer';
// import { useLocation } from 'react-router-dom';
// import LessonPage from './LessonPage';
// import coursesData from './CoursesVideoApi';
// import { Link } from 'react-router-dom';


// export const CourseVideos = () => {
//   const location = useLocation();
//   const filteredVideos = location.state?.videos || {};
//   const courseName = location.state?.course || ''; // Get the course name from the location state

//   const [activeVideo, setActiveVideo] = useState(0);

//   const handleVideoClick = (index, src, text) => {
//     setActiveVideo(index);
//     const mainVideo = document.querySelector('.main-video video');
//     const title = document.querySelector('.main-video .title');
//     mainVideo.src = src;
//     title.innerHTML = text;
//   };

//   // Find the course data from coursesData based on the courseName
//   const selectedCourse = coursesData.find((course) => course.course === courseName);
//   // Extract lessons from selectedCourse data
//   const lessons = Object.keys(selectedCourse?.Lesson || {}).map((key) => ({
//     lesson: selectedCourse.Lesson[key].lesson,
//     description: selectedCourse.Lesson[key].description,
//     pdfLink: selectedCourse.Lesson[key].pdf,
//   }));

 

//   return (
//     <>
//       <Navbar />
//       {/* Use the courseName as the page heading */}
//       <h3 className="heading">{courseName}</h3>
//       <div className="container-fluid vdContainer">
//         <div className="main-video">
//           <div className="video">
//             <video src={filteredVideos.video1} controls muted autoPlay></video>
//             <h3 className="title">0.1. Video title goes here</h3>
//           </div>
//         </div>

//         <div className='video-list'>
//           <div
//             className={`vid ${activeVideo === 0 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 0,
//                 filteredVideos.video1,
//                 '0.1. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video1} muted></video>
//             <h3 className='title'>0.1. Video title goes here</h3>
//           </div>

//           <div
//             className={`vid ${activeVideo === 1 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 1,
//                 filteredVideos.video2,
//                 '0.2. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video2} muted></video>
//             <h3 className='title'>0.2. Video title goes here</h3>
//           </div>

//           <div
//             className={`vid ${activeVideo === 2 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 2,
//                 filteredVideos.video3,
//                 '0.3. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video3} muted></video>
//             <h3 className='title'>0.3. Video title goes here</h3>
//           </div>

//           <div
//             className={`vid ${activeVideo === 3 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 3,
//                 filteredVideos.video4,
//                 '0.4. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video4} muted></video>
//             <h3 className='title'>0.4. Video title goes here</h3>
//           </div>

//           <div
//             className={`vid ${activeVideo === 4 ? 'active' : ''}`}
//             onClick={() =>
//               handleVideoClick(
//                 1,
//                 filteredVideos.video5,
//                 '0.2. Video title goes here'
//               )
//             }
//           >
//             <video src={filteredVideos.video2} muted></video>
//             <h3 className='title'>0.5. Video title goes here</h3>
//           </div>

          
//         </div>
//       </div>


//       {/* Pass the lessons to the LessonPage component */}
//       <LessonPage lessons={lessons} />
      
//       <div className="quiz-link  btn-download-pdf">
//         <Link to="/quiz" state={{ courseName: courseName, quiz: selectedCourse?.quiz }}>Attend Quiz</Link>
//       </div>

//          <div className="quiz-link  btn-download-pdf mt-1">
//         <Link to="/assignment">Assignment</Link>
//       </div>

      

//       <ScrollButton />
//       <Footer />
//     </>
//   );
// };

// export default CourseVideos;




















// Final one

import React, { useState } from 'react';
import './CourseVideos.css';
import Navbar from './Navbar';
import ScrollButton from './ScrollButton';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import LessonPage from './LessonPage';
import coursesData from './CoursesVideoApi';
import { Link } from 'react-router-dom';
import FileUpload from './FileUpload';
import {BsDownload} from "react-icons/bs"
import DownloadAssignment from './DownloadAssignment';

export const CourseVideos = () => {
  const location = useLocation();
  const filteredVideos = location.state?.videos || {};
  const courseName = location.state?.course || ''; // Get the course name from the location state

  const [activeVideo, setActiveVideo] = useState(0);

  const handleVideoClick = (index, src, text) => {
    setActiveVideo(index);
    const mainVideo = document.querySelector('.main-video video');
    const title = document.querySelector('.main-video .title');
    mainVideo.src = src;
    title.innerHTML = text;
  };

  // Find the course data from coursesData based on the courseName
  const selectedCourse = coursesData.find((course) => course.course === courseName);
  // Extract lessons from selectedCourse data
  const lessons = Object.keys(selectedCourse?.Lesson || {}).map((key) => ({
    lesson: selectedCourse.Lesson[key].lesson,
    description: selectedCourse.Lesson[key].description,
    pdfLink: selectedCourse.Lesson[key].pdf,
  }));

  // Function to handle assignment download
  const handleDownloadAssignment = () => {
    // Find the selected course based on the courseName
    const selectedCourse = coursesData.find((course) => course.course === courseName);

    if (selectedCourse && selectedCourse.assignment && selectedCourse.assignment.pdf) {
      const link = document.createElement('a');
      link.href = selectedCourse.assignment.pdf;
      link.target = '_blank';
      link.download = `${courseName}-assignment.pdf`;
      link.click();
    }
  };

  return (
    <>
      <Navbar />
      {/* Use the courseName as the page heading */}
      <h3 className="heading">{courseName}</h3>
      <div className="container-fluid vdContainer">
        <div className="main-video">
          <div className="video">
            <video src={filteredVideos.video1} controls muted autoPlay></video>
            <h3 className="title">0.1. Video title goes here</h3>
          </div>
        </div>

        <div className='video-list'>
          <div
            className={`vid ${activeVideo === 0 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                0,
                filteredVideos.video1,
                '0.1. Video title goes here'
              )
            }
          >
            <video src={filteredVideos.video1} muted></video>
            <h3 className='title'>0.1. Video title goes here</h3>
          </div>

          <div
            className={`vid ${activeVideo === 1 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                1,
                filteredVideos.video2,
                '0.2. Video title goes here'
              )
            }
          >
            <video src={filteredVideos.video2} muted></video>
            <h3 className='title'>0.2. Video title goes here</h3>
          </div>

          <div
            className={`vid ${activeVideo === 2 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                2,
                filteredVideos.video3,
                '0.3. Video title goes here'
              )
            }
          >
            <video src={filteredVideos.video3} muted></video>
            <h3 className='title'>0.3. Video title goes here</h3>
          </div>

          <div
            className={`vid ${activeVideo === 3 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                3,
                filteredVideos.video4,
                '0.4. Video title goes here'
              )
            }
          >
            <video src={filteredVideos.video4} muted></video>
            <h3 className='title'>0.4. Video title goes here</h3>
          </div>

          <div
            className={`vid ${activeVideo === 4 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                1,
                filteredVideos.video5,
                '0.2. Video title goes here'
              )
            }
          >
            <video src={filteredVideos.video2} muted></video>
            <h3 className='title'>0.5. Video title goes here</h3>
          </div>

          
        </div>
      </div>

      {/* Pass the lessons to the LessonPage component */}
      <LessonPage lessons={lessons} />


      {/* Quiz link */}
      <div className="quiz-link btn-download-pdf mt-1">
        <Link to="/quiz" state={{ courseName: courseName, quiz: selectedCourse?.quiz }}>Attend Quiz</Link>
      </div>

      <DownloadAssignment/>

      {/* Button to download assignment */}
      {selectedCourse && selectedCourse.assignment && selectedCourse.assignment.pdf && (
        <div className="quiz-link btn-download-pdf mt-1">
          <button onClick={handleDownloadAssignment} className='assignmentbtn'><BsDownload/> Assignment</button>
        </div>
      )}

      <FileUpload courseName={courseName} />

      <ScrollButton />
      <Footer />
    </>
  );
};

export default CourseVideos;
