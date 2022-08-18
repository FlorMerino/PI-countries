import React from "react";
import { Link } from "react-router-dom";
import './Country.css';

const Country = ({id, name, img, continent})=> {
  return (
    <section className="card" >
    <Link to={`/country/detail/${id}`}> 
       <h2>{name} </h2>  
       <img src={img} alt="image flag" />
    </Link>
        <h3>Continente: {continent}</h3>
    </section>
  )

};

export default Country;