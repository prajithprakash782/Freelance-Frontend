// Skill.js
import React from 'react';

const Skill = ({ name, percentage }) => {
  return (
    <div className="skill-container mb-3">
      <p>{name}</p>
      <div className="progress" style={{height:"20px",marginTop:"10px-6"}}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%`}}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default Skill;
