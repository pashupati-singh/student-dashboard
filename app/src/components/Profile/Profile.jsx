import React from 'react'
import "./Profile.css"
import images from "../../Images/p1.webp"

export const Profile = ({data}) => {

    console.log(data);
    
    return (
      <div className='profiless'>
          <div className="profile-containers">
            <div className="profile-image">
                <img src={images} alt="Profile" />
            </div>
            <div className="profile-details">
                <h2>{data[0].title} {data[0].date}</h2>
                <div className="form-group row">
                    <label htmlFor="behavioral" className="col-sm-4 col-form-label">Behavioral:</label>
                    <div className="col-sm-8">
                        <input type="range" className="form-range" min="8" max="10" id="behavioral" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="communication" className="col-sm-4 col-form-label">Communication:</label>
                    <div className="col-sm-8">
                        <input type="range" className="form-range" min="9" max="10" id="communication" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="problem-solving" className="col-sm-4 col-form-label">Problem Solving:</label>
                    <div className="col-sm-8">
                        <input type="range" className="form-range" min="5" max="10" id="problem-solving" />
                    </div>
                </div>
                <div className="profile-about">
                    <p>Hobbies: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Experience: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Intro: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className="btn btn-primary">Shortlist</button>
            </div>
        </div>
      </div>
    );
}
