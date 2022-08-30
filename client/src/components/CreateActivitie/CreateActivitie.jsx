import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {createActivitie, set, setConfirmation} from '../../redux/actions/index';
import Search from "../Search/Search";
import Validate from "./ValidateForm";
import './ActivitieForm.css'
import { useEffect } from "react";

const CreateActivitie = () => {

 const[input, setInput] = useState({
    name: '',
    difficulty: 'none',
    duration: '', 
    season: '',
    countryId:[]
 });
 const [errors, setErrors] = useState({});
 
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
 let dispatch = useDispatch();
 useEffect(()=>{
  return () =>{ dispatch(setConfirmation()) };//cuando se desmonta el componente se ejecuta esta funcionn
},[dispatch]);

 const handleSubmit = (e) => {   //funcion q recibe evento
    e.preventDefault();

   if(Object.keys(errors).length ===0){
    dispatch(createActivitie(input));

    dispatch(set([]));

    setInput({
      name: '',
      difficulty: 'none',
      duration: '', 
      season: '',
      countryId: []
    });
    }
   
   setInput({
    name: '',
    difficulty: 'none',
    duration: '', 
    season: '',
    countryId: []
  });
 
   dispatch(set([]));
};

 let confirmationR = useSelector(state => state.createActivitie);

 let countriesOptions= useSelector(state => state.countries);

 return(
  <div className="ActivitiesForm" >
    <h2>Create tourist activity</h2>
      <form className="Form">
       <fieldset className="fieldset" >
        <div className="Container">
         
         <div className="field">
           <label>Name of the activity</label> 
           <input className={errors.name? 'ErrorInput': 'inputText'} type="text" name="name"  value={input.name} onChange={e=> inputChange(e)} /> 
           <p className="Error" >{errors.name}</p>
         </div>
        
         <div className="field">
           <label>Difficulty</label> 
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
           <label>Duration:</label> 
           <input className={errors.duration? 'ErrorTimer': "inputTimer"} type="time" name="duration" value={input.duration} onChange={e=>inputChange(e)} />
           <p className="Error" >{errors.duration}</p>
         </div>

        
         <div className="Season">
           <label>Season in which it takes place</label> 
           <select name="season" onChange={e => inputChange(e)} value={input.season} >
            <option value="none" >-</option>
            <option value="summer">summer</option>
            <option value="fall">fall</option>
            <option value="winter">winter</option>
            <option value="spring">spring</option>
           </select>
         </div>
      
          <div className="Search">
           <label>Search and select the country/countries where your activity takes place: </label>
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
        { Object.keys(errors).length !==0?
           <p>Complete the corresponding data</p>:
          <p>{confirmationR}</p>
        }
        </span>

         <button onClick={e => handleSubmit(e)} className='button'>Create Activity</button>
        </form>
    <footer  >
     <Link to="/home"> <button className="buttonBack">Back</button> </Link>
    </footer>
      
  </div>
 )
};

export default CreateActivitie;