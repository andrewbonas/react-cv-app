import React from "react";
import uniqid from "uniqid";

const General = (props) => {
  const { info } = props;

  return (
    <ul>


    <li key={uniqid()}>{`Name: ${info.user} Email: ${info.email} Phone: ${info.phone}`}</li>


    </ul>
  );
};

export default General;
