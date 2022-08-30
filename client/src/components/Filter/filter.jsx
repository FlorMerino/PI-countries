import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/actions";
import { filterFunction} from "../Filter/functionForFilter";
import { MultiSelect } from "react-multi-select-component";
import './Filter.css'

const Filter = ({data}) => {


 let continents= filterFunction(data, 'continent');
 let activities = filterFunction(data, 'Tourist_activities');

 const [selected1, setSelected1] = useState([]);
 const [selected2, setSelected2] = useState([]);

 const valueRenderer1 = () => {
  if (selected1.length===0) {
    return "Continent";
  }
 }
 const valueRenderer2 = ()=> {
  if (selected1.length===0) {
    return "Turist Activitie";
  }
 }
 const[selectContinents, setSelectContinents]= useState({continent :[]});
 
 const [selectActivitie,setSelectActivitie]=useState({Tourist_activities : []});

 const handleChange1 = (e)=> {
  setSelected1(e);
  setSelectContinents({...selectContinents, continent :e.map(e=> e.value)});
 }

 const handleChange2 = (e) =>{
  setSelected2(e);

  setSelectActivitie({...selectActivitie, Tourist_activities :e.map(e=> e.value)});
 }

 let dispatch = useDispatch();

  const handleSubmit = (e)=> {
   dispatch(filterCountries({...selectContinents,...selectActivitie}));
   setSelectContinents({continent :[]});
   setSelectActivitie({Tourist_activities:[]});
   setSelected1([]);
   setSelected2([]);
  };
 
  return(
   <span className="FilterOptions" >

    <div>            
    <MultiSelect
   
      options={continents}
      value={selected1}
      onChange={handleChange1}
      valueRenderer={valueRenderer1}
      labelledBy="Select"
      
    />   
    </div>

    <div >
    <MultiSelect
 
      options={activities}
      value={selected2}
      onChange={handleChange2}
      valueRenderer={valueRenderer2}
      labelledBy="Select"
      
    />
    </div>       

    <button onClick={handleSubmit} >Filter</button>
    </span>

    );
};

export default Filter;