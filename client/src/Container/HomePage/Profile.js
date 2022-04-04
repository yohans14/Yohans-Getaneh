import React from 'react';
import { Typical } from 'react-typical';
import "./Profile.css"

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className="colz-icon">
                            <a href="https://github.com/yohans14">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yohans-getaneh-6b8443116/">
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href="https://www.instagram.com/yo_highness14/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-parent-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Yohans</span>
                        </span>
                     </div>  
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {
                                    " " 
                                }
                                I will do it all! 
                            </h1>
                            <span className="profile-role-tagline">
                                Profile application with front and back end operations.
                            </span> 
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me { " "}
                        </button>
                        <a href="Yohans Getaneh Resume" download="Yohans Getaneh Resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    
    )
}