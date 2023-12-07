import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import LoginForm from "./Components/LoginForm"
import Register from "./Components/Register"
import ContactUs from "./Components/ContactUs"
import Dashboard from "./Components/Dashboard"
import Gallery from "./Components/Gallery"
import Cart from "./Components/Cart"
import Error_page from "./Components/Error_page"
import Faq from './Components/Faq';
import AllCourses from './Components/AllCourses';
import AllCoursesGrid from './Components/AllCoursesGrid';
import SpecificCourse from './Components/SpecificCourse';
import Instructor from './Components/Instructor';

import CoursesCart from './CoursesCart';
import { Context } from './Components/context/Context';
import StripeContainer from './Components/StripeContainer';
import InstructorSpecific from './Components/InstructorSpecific';
import  {CourseVideos}  from './Components/CourseVideos';
import Header from './Components/AdminDashboard/Header';
import Profile1 from './Components/AdminDashboard/Profile1';
import Users from './Components/AdminDashboard/Users';
import Analytic1 from './Components/AdminDashboard/Analytic1';

import ResetPassword from './Components/ResetPassword';
import UserDetail1 from './Components/AdminDashboard/UserDetail1';
import Events from './Components/Events';
import { EventSpecific } from './Components/EventSpecific';

import { EventsCard } from './Components/EventsCard';
import CheckOutNow from './Components/CheckOutNowPage';
import Setting1 from './Components/AdminDashboard/Setting1';
import Admin from './Components/AdminDashboard/Admin';
import PaidCourses1 from './Components/AdminDashboard/PaidCourses1';
import YourCourses from './Components/YourCourses';
import Success from './Components/Success';
// import CourseVideos from './Components/CourseVideos';
import QuizPage from './Components/QuizPage';
import Assignments from './Components/AdminDashboard/Assignments';
import NewsTicker from './Components/NewsTicker';


const isLoggedIn = window.localStorage.getItem("loggedIn");


const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App  />
  },

  
  
  {
    path: "about",
    element: <AboutUs/>,
    
    
    
  },

  {
    path: "news",
    element: <NewsTicker/>,
    
    
    
  },


  {
    path: "quiz",
    element: <QuizPage/>,
    
    
    
  },

  {
    path: "assignments",
    element: <Assignments/>,
    
    
    
  },
 

  // {
  //   path: "analytic",
  //   element: <Analytics/>,
    
    
  // },


  {
    path: "analytic",
    element: <Analytic1/>,
    children:[
      {
        isLoggedIn:true ? <Analytic1/> : <LoginForm/>
      }
    ]
    
    
  },

  {
    path: "success",
    element: <Success/>,
    
    
  },

  {
    path: "checkout",
    element: <CheckOutNow/>,
    
    
  },

  

  {
    path: "resetpassword",
    element: <ResetPassword/>,
    
    
  },

  // {
  //   path: "userdetails",
  //   element: <UsersDetail/>,
    
    
  // },



  {
    path: "userdetails",
    element: <UserDetail1/>,
    children:[
      {
        isLoggedIn:true ? <UserDetail1/> : <LoginForm/>
      }
    ]
    
  },

  {
    path: "contact",
    element: <ContactUs/>,
    
    
  },


  {
    path: "dashboard",
    element: <Dashboard/>,
    
    
  },
  {
    path: "cart",
    element: <Cart/>,
    
    
  },


  {
    path: "coursecart",
    element: <CoursesCart/>, 
    
  },

  {
    path: "your-courses",
    element: <YourCourses/>, 
    
  },

  // {
  //   path: "setting",
  //   element: <Settings/>, 
    
  // },


  {
    path: "setting",
    element: <Setting1/>,
    children:[
      {
        isLoggedIn:true ? <Setting1/> : <LoginForm/>
      }
    ]
    
  },
  

  {
    path: "coursevideo",
    element: <CourseVideos/>,
    
    
  },


  
  {
    path: "paymentdata",
    element: <PaidCourses1/>,
    
    
  },

  // {
  //   path: "/specificCourse/:id",
  //   element: <SpecificCourse/>,
    
    
  // },



  {
    path: "/specificCourse/:productId",
    element: <SpecificCourse/>,
    
  },
 


  {
    path: "/courses",
    element: <AllCourses/>,
 
  },
  {
    path: "/specificInstructor/:InstructorId",
    element: <InstructorSpecific/>,
    
  },

  

  
  
  {
    path: "/specificInstructor/:InstructorId",
    element: <InstructorSpecific/>,
    
  },


  {
    path: "*",
    element: <Error_page/>,
    
    
  },
  // {
  //   path: "admin",
  //   element: <Admin/>,
    
    
  // },

  
  {
    path: "admin",
    element: <Users/>,
    children:[
      {
        isLoggedIn:true ? <Users/> : <LoginForm/>
      }
    ]
    
    
  },


  {
    path: "faq",
    element: <Faq/>,
    
    
  },
  {
    path: "gallery",
    element: <Gallery/>,
    
    
  },

  
  {
    path: "instructor",
    element: <Instructor/>,
    
    
  },

  {
    path: "stripe",
    element: <StripeContainer/>,
    
    
  },

  {
    path: "users",
    element: <Users/>,
    children:[
      {
        isLoggedIn:true ? <Users/> : <LoginForm/>
      }
    ]
    
    
  },







  {
    path: "register",
    element: <Register/>,
    
    
  },

  {
    path: "grid",
    element: <AllCoursesGrid/>,
    
    
  },
  // {
  //   path: "profile",
  //   element: <Profile/>,
    
    
  // },


  
  {
    path: "profile",
    element: <Profile1/>,
    children:[
      {
        isLoggedIn:true ? <Profile1/> : <LoginForm/>
      }
    ]
    
    
  },

  {
    path: "login",
    element: <LoginForm/>,
    
    
  },

  

  {
    path: "/home",
    element: <App/>,
    
  },
  {
    path: "events",
    element: <Events/>,
  },
  {
    path: "eventscard",
    element:<EventsCard/>
  },
  {
    path: "/eventspecific/:EventId",
    element:<EventSpecific/>
  },

  
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <React.StrictMode>
 <Context>
 <RouterProvider router={router} /> 

 </Context>
  
  
  </React.StrictMode>
  
  
);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
