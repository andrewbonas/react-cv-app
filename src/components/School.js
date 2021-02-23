import React from "react";
import uniqid from "uniqid";

const School = (props) => {
  const { academy, onDelete } = props;

  return (
    <ul>
    {academy.map((academy) => {
      return <li key={uniqid()}>{`School: ${academy.school} Email: ${academy.location} Phone: ${academy.achievement}`}
      <button onClick={() => {onDelete()}}>Delete</button>
      </li>

    })}
    </ul>
  );
};

export default School;
