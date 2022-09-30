import React from "react";
import { Link } from "react-router-dom";
import './Country.css';

const Country = ({id, name, img, continent})=> {
  return (
    <div className="card" >
      <div class="card-details">
      <p class="text-title">{name} </p>
      <Link to={`/country/detail/${id}`}> 
        
       <img  className="flagCountry" src={img} alt="image flag" /> 
    </Link>
    <p class="text-body">Continent: {continent}</p>
      </div>
      <Link to={`/country/detail/${id}`}> 
      <button class="card-button">More info</button>
      </Link>
    </div>
  )

};

export default Country;