











// YourCourses.js

// import React, { useState, useEffect } from "react";
// import "./YourCourses.mod.css";

// const YourCourses = () => {
//   const [courseData, setCourseData] = useState([]);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("courseData")) || [];
//     setCourseData(storedData);
//   }, []);

//   const handleUnenroll = (index) => {
//     const updatedData = [...courseData];
//     updatedData.splice(index, 1);
//     setCourseData(updatedData);
//     localStorage.setItem("courseData", JSON.stringify(updatedData));
//   };

//   const handleSuccessfulPayment = (newCourseData) => {
//     const isDuplicate = courseData.some(
//       (data) =>
//         data.image === newCourseData.image &&
//         data.course === newCourseData.course
//     );

//     if (!isDuplicate) {
//       setCourseData((prevData) => [...prevData, newCourseData]);
//       localStorage.setItem(
//         "courseData",
//         JSON.stringify([...courseData, newCourseData])
//       );
//     }
//   };

//   const uniqueCourses = courseData.filter((data, index, self) => {
//     return (
//       index ===
//       self.findIndex(
//         (d) => d.image === data.image && d.course === data.course
//       )
//     );
//   });

//   return (
//     <div className="container9">
//       <h2 className="text-center mt-4">Your Courses</h2>
//       <div className="cart9">
//         {uniqueCourses.map((data, index) => (
//           <div key={index} className="cart-item9">
//             <img src={data.image} alt="Course" />
//             <div className="cart-item-details9">
//               <p className="instructor9 fw-bold">Course: {data.course}</p>
//               <button
//                 className="unenroll-button9"
//                 onClick={() => handleUnenroll(index)}
//               >
//                 Unenroll
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YourCourses;





















//Final one 👇


import React, { useState, useEffect } from 'react';
import './YourCourses.mod.css';
import { useNavigate } from 'react-router-dom'; 
import coursesData from './CoursesVideoApi'; 

const YourCourses = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('courseData')) || [];
    setCourseData(storedData);
  }, []);

  const navigate = useNavigate(); 

  const handleUnenroll = (index) => {
    const updatedData = [...courseData];
    updatedData.splice(index, 1);
    setCourseData(updatedData);
    localStorage.setItem('courseData', JSON.stringify(updatedData));
  };

  const handleCourseClick = (courseName) => {
    const filteredVideos = filterVideosByCourse(courseName);
    navigate('/coursevideo', { state: { videos: filteredVideos, course: courseName } }); // Include the course name in the state
  };

  const filterVideosByCourse = (courseName) => {
    const selectedCourse = coursesData.find((course) => course.course === courseName);
    if (selectedCourse) {
      const { id, course, ...videos } = selectedCourse;
      return videos;
    }
    return {};
  };

  const uniqueCourses = courseData.filter((data, index, self) => {
    return (
      index ===
      self.findIndex(
        (d) => d.image === data.image && d.course === data.course
      )
    );
  });

  return (
    <div className="container9">
      <h2 className="text-center mt-4">Your Courses</h2>
      <div className="cart9">
        {uniqueCourses.map((data, index) => (
          <div key={index} className="cart-item9">
            <img src={data.image} alt="Course" onClick={() => handleCourseClick(data.course)} />
            <div className="cart-item-details9">
              <p className="instructor9 fw-bold">Course: {data.course}</p>
              <button
                className="unenroll-button9"
                onClick={() => handleUnenroll(index)}
              >
                Unenroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCourses;


