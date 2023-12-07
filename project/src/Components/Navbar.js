import React, { useContext } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { BsCalendar4Event } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({ props, setShow }) => {
  return (
    <>
      <div className="container-fluid mobile-toggler d-none d-xl-block ">
        <div className="row p-3 ">
          <div className="col d-flex flex-row gap-3 align-self-center justify-content-center ">
            <h6>WELCOME </h6>
            <h6>
              {" "}
              CALL <span className="iconcolor1">+92 316 9727859</span>
            </h6>
            <h6>FOLLOW US</h6>
            <a
              href="https://twitter.com/adnan191023?t=2-LnxvaGXXM4LfLpFBztjQ&s=09"
              target="blank"
            >
              {" "}
              <AiOutlineTwitter className="iconcolor1" />
            </a>
            <a
              href="https://instagram.com/muhammadadnan5882?igshid=NGExMmI2YTkyZg=="
              target="blank"
            >
              {" "}
              <FaInstagramSquare className="iconcolor1" />
            </a>
            <a
              href="https://www.facebook.com/adnantechchannel?mibextid=ZbWKwL"
              target="blank"
            >
              {" "}
              <FaFacebookF className="iconcolor1" />
            </a>
          </div>

          <div className="col d-flex namargin flex-row justify-content-end ">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-col btn-sm text-white rounded-pill"
              >
                <RiAdminLine className="iconcolor" /> Login
              </button>
            </Link>

            <Link to="/register">
              <button
                type="button"
                className="btn btn-col btn-sm text-white rounded-pill"
              >
                <BsPencil className="iconcolor" /> Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <header>
        <div className="container-fluid">
          <div className="navb-logo ">
            <img src="./Images/Oes Logo/1111.png" alt="Logo" />
          </div>

          <div className="navb-items d-none d-xl-flex">
            <div className="item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
              {/* <a className="nav-link " href="/" data-bs-toggle="dropdown">HOME   </a> */}
              {/* <ul class="dropdown-menu">
			  <li> <Link className="dropdown-item" to="/">HOME 1</Link></li>
		    </ul> */}
            </div>

            <div className="item">
              <a class="nav-link " to="#" data-bs-toggle="dropdown">
                COURSES
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a className="dropdown-item" to="#">
                    {" "}
                    FEATURERED
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/courses">
                    {" "}
                    ALL COURSES{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    {" "}
                    DASHBOARD{" "}
                  </Link>
                </li>
                {/* <li><Link className="dropdown-item" to="/coursevideo">Video Lectures</Link></li>   */}
              </ul>
            </div>

            <div className="item">
              <Link to="/instructor" class="nav-link">
                INSTRUCTOR
              </Link>
              {/* <Link class="nav-link " to="/instructor" data-bs-toggle="dropdown">INSTRUCTORS</Link> */}
              {/* <ul class="dropdown-menu">
                
			  <li><Link className="dropdown-item" to="/instructor">BECOME AN INSTRUCTOR</Link></li>
			  <li><a className="dropdown-item" to="#"> INSTRUCTOR SINGLE </a></li>
			  
		    </ul> */}
            </div>

            <div className="item">
              {/* <a class="nav-link  " href="/events" data-bs-toggle="dropdown">EVENTS</a> */}
              <Link to="/events" className="nav-link">
                EVENT
              </Link>

              {/* <ul class="dropdown-menu">
			  <li><a className="dropdown-item" to="#"> EVENT CALENDER</a></li>
			  <li><a className="dropdown-item" to="#"> EVENT LIST </a></li>
			  <li><a className="dropdown-item" to="#"> EVENT SINGLE </a></li>
		    </ul> */}
            </div>

            <div className="item">
              <a class="nav-link " to="#" data-bs-toggle="dropdown">
                PAGES
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about">
                    {" "}
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">
                    {" "}
                    CONTACT US{" "}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/faq">
                    {" "}
                    FAQ PAGE{" "}
                  </Link>
                </li>
                {/* <li><Link className="dropdown-item" to="/error"> 404 ERROR PAGE </Link></li> */}
                <li>
                  <Link className="dropdown-item" to="/gallery">
                    {" "}
                    GALLERY
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    {" "}
                    SHOP{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="item">
              <a class="nav-link " to="#" data-bs-toggle="dropdown">
                ELEMENTS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/news">
                    {" "}
                    News
                  </Link>
                </li>
                {/* <li><a className="dropdown-item" to="#"> CLASSIC </a></li>
			  <li><a className="dropdown-item" to="#"> INFOGRAPHIC </a></li>
			  <li><a className="dropdown-item"  to="#"> PRESENTATION </a></li> */}
              </ul>
            </div>

            {/* <div className="item">
              <a href="/about">ELEMENTS</a>
            </div> */}

            <div className="item">
              <Link to="/your-courses">
                <BsBook />
              </Link>
            </div>

            <div className="item d-flex cart1">
              <Link to="/coursecart">
                {" "}
                <span onClick={() => setShow(false)}>
                  <AiOutlineShoppingCart />
                </span>
              </Link>
              {/* <span>0</span> */}
            </div>

            <button
              className="btn item"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <GoThreeBars />
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Online Student Coaching System</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                An online student coaching system is a digital platform
                revolutionizing the way students receive guidance and support in
                their educational pursuits. Through virtual coaching sessions,
                students can connect with qualified mentors and tutors from
                anywhere, transcending geographical barriers. These systems
                offer personalized learning experiences, tailoring guidance to
                individual needs and goals. With the aid of data analytics,
                coaches track student progress and identify areas for
                improvement.
                <br />
                <br />
                <br />
                <br />
                <a
                  href="https://twitter.com/Samiull72617599?s=09"
                  target="blank"
                >
                  {" "}
                  <AiOutlineTwitter className="iconcolor2" />
                </a>
                <a
                  href="https://instagram.com/muhammadadnan5882?igshid=NGExMmI2YTkyZg=="
                  target="blank"
                >
                  {" "}
                  <FaInstagramSquare className="iconcolor2" />
                </a>
                <a
                  href="https://www.facebook.com/adnantechchannel?mibextid=ZbWKwL"
                  target="blank"
                >
                  {" "}
                  <FaFacebookF className="iconcolor2" />
                </a>
              </div>
            </div>
          </div>

          {/* Button trigger modal  */}
          <div className="mobile-toggler d-lg-none">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              <GoThreeBars />
            </a>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="navbModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                {/* <div className="modal-header">
                  <img src="./Images/Oes Logo/logo7.jpeg" alt="logo" />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div> */}

                <div className="modal-body">
                  <div className="modal-line">
                    <AiOutlineHome className="fs-6 colo " />
                    <a href="/">Home</a>
                  </div>

                  <div className="modal-line">
                    <BiBookReader className="fs-6 colo  " />
                    <a href="/courses">Courses</a>
                  </div>

                  <div className="modal-line">
                    <GiTeacher className="fs-6 colo  " />
                    <a href="/instructor">Instructors</a>
                  </div>

                  <div className="modal-line">
                    <AiOutlineInsertRowAbove className="fs-6 colo " />
                    <a href="/about">About Us</a>
                  </div>

                  <div className="modal-line">
                    <BiBookReader className="fs-6 colo " />
                    <a href="/your-courses">Your Course</a>
                  </div>

                  <div className="modal-line">
                    <FaQuestion className="fs-6 colo " />
                    <a href="/faq">FAQ</a>
                  </div>

                  <div className="modal-line">
                    <TfiGallery className="fs-6 colo " />
                    <a href="/gallery">Gallery</a>
                  </div>

                  <div className="modal-line">
                    <BsCalendar4Event className="fs-6 colo " />
                    <a href="/events">Events</a>
                  </div>

                  <div className="modal-line">
                    <BsCalendar4Event className="fs-6 colo " />
                    <a href="/news">NEWS</a>
                  </div>

                  <div className="modal-line">
                    <FiLogIn className="fs-6 colo " />
                    <a href="/login">Login</a>
                  </div>

                  <a href="/contact" className="navb-button" type="button">
                    Let's talk
                  </a>
                </div>

                <div className="mobile-modal-footer">
                  <a target="_blank" href="#">
                    <a
                      href="https://twitter.com/Samiull72617599?s=09"
                      target="blank"
                    >
                      {" "}
                      <AiOutlineTwitter className="iconcolor1 text-white" />
                    </a>
                  </a>
                  <a target="_blank" href="#">
                    <a
                      href="https://instagram.com/muhammadadnan5882?igshid=NGExMmI2YTkyZg=="
                      target="blank"
                    >
                      {" "}
                      <FaInstagramSquare className="iconcolor1 text-white" />
                    </a>
                  </a>
                  <a target="_blank" href="#">
                    <a
                      href="https://www.facebook.com/muhammadadnan.khan.5283?mibextid=ZbWKwL"
                      target="blank"
                    >
                      {" "}
                      <FaFacebookF className="iconcolor1 text-white" />
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
