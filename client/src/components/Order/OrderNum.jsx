import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortNumPopulation } from "../../redux/actions";
import './Order.css';



const OrderNum = () => {

  const[input, setInput] = useState({select: ''})

  const onSelectChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, 
   });
  };
 let dispatch= useDispatch();
  useEffect(()=>{  dispatch(sortNumPopulation(input)) },[dispatch,input])
 return(
  <div className="Order">
    <h4>Cantidad de poblacion</h4>
    <select name="select" onChange={e => onSelectChange(e)}>
         <option value="none" >-</option>
         <option value='ASCENDANT' >min-max</option>
         <option value='DESCENDENTE' >max-min</option> 
       </select>  
  </div>
 )
};

export default OrderNum;
