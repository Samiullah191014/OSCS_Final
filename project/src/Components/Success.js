import React from "react";
import { useLocation } from "react-router-dom";

const YourCourses = () => {
  const location = useLocation();
  const courseData = location.state?.courseData;

  return (
    <div>
      {courseData && (
        <>
          <h2>Your Courses</h2>
          <div>
            <img src={courseData.images} alt="Course Image" />
            <p>Instructor: {courseData.instructors}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default YourCourses;
