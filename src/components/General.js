import React from "react";

const General = (props) => {
  const { info } = props;

  return (
    <div>
    <h1>{info.user}</h1>
    <ul>
    <li>{`Address: ${info.address}`}</li>
    <li>{`Email: ${info.email} `}</li>
    <li>{`Phone: ${info.phone}`}</li>
    </ul>
    </div>
  );
};

export default General;
