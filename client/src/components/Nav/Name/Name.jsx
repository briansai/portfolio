import React from 'react';

const Name = props => (
  <div className="name-container">
    <div className="nav-image">
      <img src={`https://brian-portfolio.s3.amazonaws.com/${props.self}`} alt="Brian Sai"/>
    </div>
    <div className="nav-name">
      Brian Sai
    </div>
    <div className="nav-occupation">
      FullStack Developer
    </div>
  </div>
)

export default Name;