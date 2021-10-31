import React from 'react';

const Country = (props) => {
  return (
    <div>
      <h1>This is: {props.name}</h1>
      <p>Capital: {props.capital}</p>
      <p>Population: {props.population}</p>
    </div>
  );
};

export default Country;