import React from "react";
import '../styles/General.css'

const General = (props) => {
  const { info } = props;

let name = info.user;
  if( name === ''){
      name = 'John Smith';
  }

  return (
    <div className="info">
    <h1 className='name capitals'>{name}</h1>
    <ul className="personal-info">
    <li>{`Address: ${info.address}`}</li>
    <li>{`Email: ${info.email} `}</li>
    <li>{`Phone: ${info.phone}`}</li>
    </ul>
    </div>
  );
};

export default General;
