import React, { useEffect, useState } from 'react';
import App_Bar from './App_Bar';
import Header from './Header';
import '../../Dash.css';

const PaidCourses = () => {
  const [paidCourses, setPaidCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/paid-courses')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setPaidCourses(data.data);
        } else {
          console.log('Failed to fetch paid courses');
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  return (
    <>
      <div className="bgcolor23">
        <App_Bar />
        <div className="d-flex">
          <Header />
          <div className="container marginclass11">
            <h1>Paid Courses</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Amount Paid</th>
                  <th>Course Name</th>
                  <th>Course Images</th>
                </tr>
              </thead>
              <tbody>
                {paidCourses.map((course) => (
                  <tr key={course._id}>
                    <td>{course.amount}</td>
                    <td>{course.course.join(', ')}</td>
                    <td>
                      {course.images.map((image, imageIndex) => (
                        <img
                          key={imageIndex}
                          src={image}
                          alt={`Course ${course._id} Image`}
                          style={{ width: '100px' }}
                        />
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaidCourses;
