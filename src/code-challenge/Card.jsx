import React from 'react';
import { formatName } from './helpers';

export const Card = ({ name, image }) => {
  const formattedName = formatName(name);

  return (
    <div className="card">
      <div className="image">
        <img src={`./images/${image}`} alt={formattedName} />
      </div>
      <div className="name">{formattedName}</div>
    </div >
  )
};
