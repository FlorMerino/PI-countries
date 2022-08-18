import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sort } from "../../redux/actions";
import './Order.css';

const OrderAlf = () =>{

 const[input , setInput]=useState({select: ''});

 const dispatch = useDispatch();
 
 const onSelectChange = (e) =>{
    setInput({
      ...input,
      [e.target.name]: e.target.value, 
   });
 }
 
 useEffect(()=>{  dispatch(sort(input)) },[dispatch,input])
 
  return(
    <div className="Order">
        <h4>Alfabeticamente</h4>
        <select name="select" onChange={e => onSelectChange(e)}>
         <option value="none" >-</option>
         <option value='ASCENDANT' >A-Z</option>
         <option value='DESCENDENTE' >Z-A</option> 
       </select>  
    </div>
  )
}//ver de poner a ascendente y desc en unas variables aparte

export default OrderAlf;