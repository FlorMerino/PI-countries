import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/actions";
import { filterFunction } from "../../FunctionsControllers/Functions";
import './Filter.css'

const Filter = ({data}) => {


 let continents= filterFunction(data, 'continent');
 let activities = filterFunction(data, 'Tourist_activities');


 const[input, setInput]= useState({
      continent :[],
      Tourist_activities:[] 
    });
  
   const[option, setOption] = useState({visible1:false, visible2:false})

   const handleClickOption = (e) =>{

     let prop = e.target.innerHTML === 'Actividad turistica'? 'visible2' : 'visible1';
     e.preventDefault();
     setOption({
      ...option,
      [prop]: !option[prop]})
   };

 const handleInputChange = (e) => {
  
 let nameProp= e.target.name;

 if(e.target.checked){
          console.log(e.target.checked)
    setInput({
        ...input,
        [nameProp] : [...input[nameProp], e.target.value]
    });
 }
 else if(!e.target.checked){
    
    setInput({
        ...input,
        [nameProp]: input[nameProp].filter(elem => elem !== e.target.value),
      });
 }
 };

 let dispatch = useDispatch();

 const handleSubmit = (e)=> {
  dispatch(filterCountries(input));
  setInput({
    continent :[],
    Tourist_activities:[] 
  });
 };
  return(
   <span className="FilterOptions" >

    <div>
    <h4 className="listOpt" onClick={e =>{handleClickOption(e)}} >Contienente</h4>     
             
             <ul className={option.visible1? 'visible1' : 'no-visible1'} > 
             {
               continents.map( obj => {
                return <li className="list" key={obj.id} >
                 <input className="checkbox" type="checkbox" name='continent' value={obj.property} onClick={e =>handleInputChange(e)}/> {obj.property}
                 </li>
               })
             }
             </ul>

    </div>

    <div >
     <h4 className="listOpt" onClick={e =>{handleClickOption(e)}} >Actividad turistica</h4>
          <ul className={option.visible2? 'visible1' : 'no-visible1'} >
            {
              activities.length >0?
               activities.map( obj => {
                return <li key={obj.id} className="list" >
                 <input className="checkbox" type="checkbox" name='Tourist_activities' value={obj.property} onClick={e => handleInputChange(e)}/> {obj.property}
                </li>
                }):
              <p></p>
            }
            </ul> 
            <button onClick={handleSubmit} >filtrar</button>
    </div>       
     
    </span>

    );

};

export default Filter;