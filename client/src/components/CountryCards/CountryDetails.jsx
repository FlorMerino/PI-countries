import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import './CountryDetail.css';

const CountryDetail =(props) => {
 const param = props.match.params.id 
console.log(param)
 let dispatch = useDispatch();

 useEffect(()=>{
    dispatch(getCountryDetails(param));
 },[dispatch,param]);

 const countryDetails = useSelector(state => state.countryDetail)

    return(
      <div className="CardCountry" >
        <h1>Detalles de su destino seleccionado</h1>
        <div className="Country">
        {
        Object.keys(countryDetails).length !== 0 ?
        <div className="CountryDetails1" >
          <hr />
          <h2> {countryDetails.name} </h2>
          <img src={countryDetails.image} alt="image flag" />
          <hr />
          <span className="Details" >
          <h3>Continente:</h3> <p>{countryDetails.continent}</p>
          <h3>Capital:</h3> <p>{countryDetails.capital}</p>
          <h3>Subregion:</h3> <p>{countryDetails.sub_region}</p>
          <h3>Area:</h3> <p>{countryDetails.area}</p>
          <h3>Poblacion:</h3> <p>{countryDetails.population}</p>
          </span>
          <span className="Activitie" >
          {
            <div>
              {countryDetails.Tourist_activities.length ===1?
                <h2>Actividad turistica</h2>:
                <h2>Actividades turisticas</h2>
              }
              { countryDetails.Tourist_activities.length >0 ?
               <div className="Info">
                 {
                  countryDetails.Tourist_activities.map(obj => {
                    return (
                      <div className="border" >
                        <h3>{obj.name} </h3> 
                        <h4>Dificultad: {obj.difficulty}</h4>
                        <h4>Duracion {obj.duration}hr</h4>
                        <h4>Se habilita en la temporada de {obj.season}</h4>
                      </div>
                    )            
                  })
                }
               </div>:
                <div></div>
              }
            </div>
          }
          </span>
          
        </div>:
         <div>
           <h2>Detalles de su destino seleccionado</h2>
            <img src="https://cdn.kibrispdr.org/data/1789/marker-gif-7.gif" alt="marker gif" />
         </div>
       }
        </div>
       <Link to="/home"> <button> Volver</button></Link>
      </div>
    );
};

export default CountryDetail;