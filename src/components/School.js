import React from "react";
import uniqid from "uniqid";

const School = (props) => {
  const { academy, onDelete } = props;

  return (
    <div>
    <h2>Education</h2>
    <ul>
    {academy.map((academy) => {
      return <div key={uniqid()}>
      <h3>
      {academy.school}
      </h3>
      <ul>
      <li>{academy.location}</li>
      <li>{academy.start} - {academy.finish}</li>
      </ul>
      <div>{academy.achievement}</div>
      <button onClick={() => {onDelete()}}>Delete</button>
      </div>

    })}
    </ul>
    </div>
  );
};

export default School;
