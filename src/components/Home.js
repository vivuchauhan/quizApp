import React from 'react'
import logoImg from '../Group.png';
import { Link } from "react-router-dom";

import './Home.css';

export const Home = () => {
  return (
    <div className="card">
      <div className="header">
        <img src={logoImg} alt="Logo" className="logo" />
        <p className="branding-text">upraised</p>
      </div>
      <div className="content">
        <div className="circle">
          <p>Quiz</p>
        </div>
      </div>
      <Link to="/quiz" >
        <div className="footer">
          <button className="start-button">Start</button>
        </div>
        </Link>
    </div>
  )
}
