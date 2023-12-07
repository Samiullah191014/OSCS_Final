import React,{useState} from 'react';
import './NewsTicker.mod.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import PrincipalMessage from './PrincipalMessage';


const news = [
  { id: 1, title: 'Ist merit list of the selected students for the award of ETEA scholarship. (27/7/2023)', link: '/pdf/notification1.pdf' },
  { id: 2, title: 'second merit list of the selected students. (25/7/2023)', link: '/pdf/notification2.pdf' },
  { id: 3, title: 'Third merit list of the selected students. (20/7/2023)', link: '/pdf/notification3.jpeg' },
  // Add more news items as needed
];



const Faqbackimage=require('../AssetsFolder/CartImage/cartbg.png');
const Faqbg={
    width: '100%',
    height: '35vh',
   backgroundImage: `url(${Faqbackimage})`,
    backgroundSize:'cover'
}; 

const NewsTicker = () => {
    const [animationPlay, setAnimationPlay] = useState('running');

    const handleMouseEnter = () => {
      setAnimationPlay('paused');
    };
  
    const handleMouseLeave = () => {
      setAnimationPlay('running');
    };

  return (
    <>
    <Navbar/>
    <div className="container-fluid  imgbg" style={Faqbg}>
    
        <div className="container ">
          <div className="row ">
            <h1 className="text-white mt-5 pt-5">NEWS Page</h1>
            <div className='d-flex flex-row gap-2'>
            <span className='text-white'><Link to="/" className="text-white">Home</Link></span> 
            <span className='text-white'> /</span>
            <span className='text-white'><Link to="/news" className="text-white">Latest News</Link></span>
        </div>
          </div>
        </div>
      </div>

      <div className="parent1-container ">
      <div className="newscontainer">
        <div className="newsrow">
          <div className="newscol-6">
            <h1 className='widclass'>ONLINE STUDENT COACHING SYSTEM</h1>
            <p>
              In the latest news related to the Online Student Coaching System, educational institutions and coaching
              centers have witnessed a significant surge in the adoption of virtual learning platforms. With the ongoing
              global shift towards remote education, the demand for online student coaching systems has skyrocketed.
              These platforms offer students a convenient and flexible way to access high-quality educational resources,
              interactive sessions, and personalized mentorship from experienced instructors, regardless of geographical
              constraints.
            </p>
          </div>

         
<div className="newscol-6">
<div
  className="ticker-container"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <ul className="ticker" style={{ animationPlayState: animationPlay }}>
    {news.map((item) => (
      <li key={item.id}>
        <div className="link-wrapper">
        <span className="news-label"><img src="./Pdf/newicon.gif" alt="news-icon"/></span>

          <a href={item.link} download className="alink">
            {item.title}
          </a>
        </div>
      </li>
    ))}
  </ul>
</div>
</div>
        </div>
      </div>
    </div>
   
   <PrincipalMessage/>
     
   
   <ScrollButton/>
   <Footer/>
    </>
  );
};

export default NewsTicker;
