import React from 'react';
import "./Course.css";

const Course = ({links,hours,endAt,name}) => {

    return (
        <div className='course-container' >
           
            <p>Assignment topic:{name}</p>
            <p > Assignment Link: <span className="text-decoration-none text-primary"> {links}</span></p>
           <p>Assignment Time: {hours}hrs</p>
           <p>Assignment end at: <span className="text-error">{endAt}</span></p>
        </div>
    );
};

export default Course;
