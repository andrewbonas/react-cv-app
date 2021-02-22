import React from "react";
import uniqid from "uniqid";

const Work = (props) => {
  const { work, onDelete } = props;

  return (
    <ul>
    {work.map((job) => {
      return <li key={uniqid()}>{`Work: ${job.name} Position: ${job.position} Location: ${job.location} Start: ${job.start} Finish: ${job.finish}`}
      <button onClick={() => {onDelete()}}>Delete</button>

        </li>

    })}
    </ul>
  );
};

export default Work;
