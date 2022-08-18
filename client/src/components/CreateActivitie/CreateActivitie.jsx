import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {createActivitie, set} from '../../redux/actions/index';
import Search from "../Search/Search";
import Validate from "./ValidateForm";
import './ActivitieForm.css'

const CreateActivitie = () => {

 const[input, setInput] = useState({
    name: '',
    difficulty: 'none',
    duration: '', 
    season: '',
    countryId:[]
 });
 const [errors, setErrors] = useState({});
 const [message, setMessage] = useState({})
  console.log(input)

 const inputChange = (e) => {
  setErrors(Validate({
    ...input,
    [e.target.name]: e.target.value,
   }));

  if(e.target.type === 'checkbox'){
    if(e.target.checked){
   
      setInput({
        ...input,
        [e.target.name]: [...input.countryId, e.target.value],
      });
    }
    else if(!e.target.checked){

      setInput({
        ...input,
        [e.target.name]: input.countryId.filter(id => id !== e.target.value),
      });
    }
  }else {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
 };
 console.log(errors)
 console.log(message)
 let dispatch = useDispatch();

 const handleSubmit = (e) => {   //funcion q recibe evento
    e.preventDefault();
    
   let valueSet=[];
   if(Object.keys(errors).length ===0){
    dispatch(createActivitie(input));

    dispatch(set(valueSet));

    setInput({
      name: '',
      difficulty: 'none',
      duration: '', 
      season: '',
      countryId: []
    });
    setErrors(errors);
    }
   setMessage(errors);
   setInput({
    name: '',
    difficulty: 'none',
    duration: '', 
    season: '',
    countryId: []
  });
   setErrors({});
   dispatch(set(valueSet));
};

 let confirmationR = useSelector(state => state.createActivitie);
 let countriesOptions= useSelector(state => state.countries);

 return(
  <div className="ActivitiesForm" >
    <h2>Crear actividad turistica</h2>
      <form className="Form">
       <fieldset className="fieldset" >
        <div className="Container">
         
         <div className="field">
           <label>Nombre de la actividad</label> 
           <input className={message.name? 'ErrorInput': 'inputText'} type="text" name="name"  value={input.name} onChange={e=> inputChange(e)} /> 
           <p className="Error" >{message.name}</p>
         </div>
        
         <div className="field">
           <label>Dificultad</label> 
           <select name="difficulty" onChange={e => inputChange(e)} value={input.difficulty} >
             <option value="none" >-</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
           </select>
         </div>

         <div className="field">
           <label>Duracion:</label> 
           <input className={message.duration? 'ErrorTimer': "inputTimer"} type="time" name="duration" value={input.duration} onChange={e=>inputChange(e)} />
           <p className="Error" >{message.duration}</p>
         </div>

        
         <div className="Season">
           <label>Temporada en la cual puede realizarse</label> 
           <select name="season" onChange={e => inputChange(e)} value={input.season} >
            <option value="none" >-</option>
            <option value="verano">verano</option>
            <option value="otoño">otoño</option>
            <option value="invierno">invierno</option>
            <option value="primavera">primavera</option>
           </select>
         </div>
      
          <div className="Search">
           <label>Busque y seleccione el/los paises donde se realiza su actividad: </label>
            <Search/> 
            {
              countriesOptions.length >0?
             <ul className="listCountries" >
             {
              countriesOptions.map(country =>{
                return <li key={country.id} >
                  <input className="checkbox" type="checkbox" name="countryId" value={country.id} onClick={inputChange} /> {country.name}
                 </li>
              })
             }
             </ul> :
             <p></p>
           }
          </div>
          </div>
       </fieldset>
        <span className="MessageConfirmation" >
        {
          Object.keys(message).length ===0?
          <p>{confirmationR}</p>:
          <p>No pudimos cargar su actividad turistica</p>
        }
        </span>

         <button onClick={e => handleSubmit(e)} className='button'>Crear Actividad</button>
        </form>
    <footer >
    <Link to="/home"> <button className="buttonBack">Volver</button> </Link>
    </footer>
      
  </div>
 )
};

export default CreateActivitie;