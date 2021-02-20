import React from "react";
import uniqid from "uniqid";

const General = (props) => {
  const { info } = props;

  return (
    <ul>
    {info.map((info) => {
      if (info.name.length > 0 || info.name.length > 0 || info.email.length > 0) {
      return <li key={uniqid()}>{`Name: ${info.name} Email: ${info.email} Phone: ${info.phone}`}</li>
    }
    })}
    </ul>
  );
};

export default General;
