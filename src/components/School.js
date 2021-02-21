import React from "react";
import uniqid from "uniqid";

const School = (props) => {
  const { academy } = props;

  return (
    <ul>
    {academy.map((academy) => {
      return <li key={uniqid()}>{`School: ${academy.school} Email: ${academy.location} Phone: ${academy.achievement}`}</li>

    })}
    </ul>
  );
};

export default School;
