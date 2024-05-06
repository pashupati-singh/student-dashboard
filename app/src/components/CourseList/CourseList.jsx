import React, { useState } from 'react';
import "./CourseList.css";
import { Profile } from '../Profile/Profile'; // Import the Profile component

const courseData = [
    {
        id: 1,
        title: 'Shubham Singh',
        level: 'shubham@gmail.com',
        date: '78%',
        status: 'Completed'
    },
    {
        id: 2,
        title: 'John Doe',
        level: 'john.doe@example.com',
        date: '85%',
        status: 'On Going'
    },
    {
        id: 3,
        title: 'Alice Smith',
        level: 'alice.smith@example.com',
        date: '65%',
        status: 'Completed'
    },
    {
        id: 4,
        title: 'Emily Brown',
        level: 'emily.brown@example.com',
        date: '70%',
        status: 'Completed'
    },
    {
        id: 5,
        title: 'Michael Johnson',
        level: 'michael.johnson@example.com',
        date: '60%',
        status: 'On Going'
    },
    {
        id: 6,
        title: 'Emma Wilson',
        level: 'emma.wilson@example.com',
        date: '80%',
        status: 'Completed'
    },
];


const CourseList = ({handleData}) => {
  

    const textColor = courseData.map(each => {
        if (each.status === "Completed") {
            return 'green';
        } else if (each.status === 'On Going') {
            return 'orange';
        } else {
            return 'blue';
        }
    });

    const handleRowClick = (index) => {
        const filtering = courseData.filter((el)=>el.id === index)
        handleData(filtering)
    };

    return (
        <div className="shadow mx-1 px-3 bg-light rounded-3 ">
            <div className=' d-flex align-items-center justify-content-between p-3 mt-3 ' >
                <h4 className="mb-0">Student's</h4>
                <button className="btn ">See All</button>
            </div>

            <div className=' '>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Marks</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseData.map((course, index) => (
                            <tr key={index} onClick={() => handleRowClick(index)}>
                                <td>{course.title}</td>
                                <td>{course.level}</td>
                                <td>{course.date}</td>
                                <td style={{ color: textColor[index] }}>{course.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseList;
