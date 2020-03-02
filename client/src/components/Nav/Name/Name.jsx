import React from 'react';
import './Name.scss';

const Name = props => (
  <div className="name-container">
    <div className="nav-image">
      <img src={`https://brian-portfolio.s3.amazonaws.com/${props.self}`} alt="Brian Sai"/>
    </div>
    <div className="nav-name">
      Brian Sai
    </div>
    <div className="nav-occupation">
      Software Engineer
    </div>
  </div>
)

export default Name;