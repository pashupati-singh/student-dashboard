import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Headers.css";
import Courses from '../Courses/Course';
import CourseList from '../CourseList/CourseList';
import { Profile } from '../Profile/Profile';

const Headers = () => {
    const [data, setData] = useState("");
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleData = (details) => {
        setData(details);
    }

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    }

    return (
        <>
            <div className='d-flex flex-column' style={{ width: "100%" }}>
                <div className="container-fluid bg-light ">
                    <div className="row py-3 d-flex align-items-center shadow">
                        <div className="col-12 col-lg-6 d-flex ">
                            <div className="input-group rounded-pill">
                                <input type="text" className="form-control rounded-pill" placeholder="Search" />
                                <span className="input-group-text border-0 bg-transparent rounded-pill"></span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center gap-3">
                            <div className="rounded-circle overflow-hidden">
                                <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1694269159~exp=1694269759~hmac=c8c65095b670091331a550b674305943e6a42c710a45b7356ecfe851d77b916b" alt="Profile" className="img-fluid profile" />
                            </div>
                            <div className="ml-2 bell-icon">
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='course-list'>
                        <div>
                            <p className="font-weight-bold fs-5 text-dark mb-2 mt-3 ">Course's</p>
                            <CourseList handleData={handleData} />
                        </div>
                        <div>
                            <p className="font-weight-bold fs-5 text-dark mb-2 mt-4 ">Today's Assignments</p>
                            <div className='courses'>
                                <div>
                                    <Courses
                                        links="https://example.com"
                                        hours={8}
                                        endAt="2024-05-10"
                                        name="React Course"
                                    />
                                </div>
                                <div>
                                    <Courses
                                        links="https://example.com"
                                        hours={7}
                                        endAt="2024-05-10"
                                        name="React Course"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-container'>
                        <p className="font-weight-bold fs-5 text-dark mb-2 mt-3 ">Profile</p>
                        <Profile data={data} />
                    </div>
                </div>
            </div>

            {isNavbarOpen && (
    <div className="vertical-navbar">
        <button className="close-navbar" onClick={closeNavbar}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <ul className="navbar-nav d-flex flex-column">
                <li style={{ alignItems: 'flex-start' }} className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
                <li className="nav-item"><a className="nav-link" href="#">My Courses</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Messages</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
            </ul>
        </nav>
    </div>
)}

        </>
    );
};

export default Headers;
