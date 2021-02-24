import React from "react";
import uniqid from "uniqid";
import '../styles/School.css'


const School = (props) => {
  const { academy, onDelete } = props;

  return (
    <div>
    <h2 className="capitals">Education</h2>
    <ul>
    {academy.map((academy) => {
      return <div key={uniqid()}>
      <div className="school">
      <div classname="school-left">
      <h3 className="capitals">
      {academy.school}
      </h3>
      <div className="school-achievement">• {academy.achievement}</div>
      </div>

      <ul className="no-bullet capital text-right">
      <li>{academy.location}</li>
      <li>{academy.start} - {academy.finish}</li>
      </ul>
      </div>
      <div className="remove-button-ctn">
      <button className="remove-button" onClick={() => {onDelete()}}>Delete</button>
      </div>
      </div>

    })}
    </ul>
    </div>
  );
};

export default School;
