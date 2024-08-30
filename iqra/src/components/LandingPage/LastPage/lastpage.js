import React from 'react';
import './lastpage.css'; 
import img1 from "../Images/img1.jpg";

const lastpage = () => {
  return (
    <div className="signup-container">
      <div className="image-container">
        <img src={img1} alt="Child" />
      </div>
      <div className="text-container">
        <p className="title">Explore your Career</p>
        <p className="bold-text">Unlock Your Opportunities</p>
        <p className="small-text">Sign Up for Free and Discover the World of Knowledge</p>
        <button className='custom-button' onClick={() => { window.location.href = '/signup'; }}>Sign Up for Free</button>
      </div>
    </div>
  );
};

export default lastpage;
