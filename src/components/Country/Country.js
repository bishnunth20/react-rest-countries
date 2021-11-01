import React from 'react';
import './Country.css';

const Country = (props) => {
  const {population, region} = props.country;
  const name = props.country.name.common;
  const flag = props.country.flags.png;
  const capital = props.country.capital;
  // console.log(props.country);
  return (
    <div className='country bg-success'>
      <h4 className='text-warning'>This is: {name}</h4>
      <img src={flag} alt="" />
      <p><small>Region: {region}</small></p>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;