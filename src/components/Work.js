import React from "react";
import uniqid from "uniqid";

const Work = (props) => {
  const { work, onDelete } = props;

  return (
    <div>
    <h2>work</h2>
    <ul>
    {work.map((job) => {
      return <div key={uniqid()}>
      <h3>{job.name}</h3>
      <h4>{job.position}</h4>
      <ul>
      <li>{job.location}</li>
      <li>{job.start} - {job.finish}</li>
      </ul>
      <div>{job.description}</div>

      <button onClick={() => {onDelete()}}>Delete</button>
        </div>

    })}
    </ul>
    </div>
  );
};

export default Work;
