import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { set } from '../../redux/actions';
import OrderAlf from '../Order/OrderAlf';
import Search from '../Search/Search';
import Filter from '../Filter/filter';
import OrderNum from '../Order/OrderNum';
import './Nav.css';
import { useDispatch } from 'react-redux';

const NavBar = ({ allCountries, countries, setPag}) => {

 const[options, setOptions] = useState({visible:false});
 const[order, setOrder] = useState({visible:false});
 const[search,setSearch] = useState({color:false})

 const handleClickSearch = (e) => {
  setSearch({color: !search.color})
 }

 const handleClickOrder = (e) =>{
  console.log(e)
  e.preventDefault();
  setOrder({visible: !order.visible})
};

 const handleClickOptions = (e) =>{
    console.log(e)
    e.preventDefault();
    setOptions({visible: !options.visible})
  };
 let dispatch = useDispatch();
 
 const handleSubmit = (e)=> {
  dispatch(set([]));
  };

  return (
   
   <div className='nav-bg'>
     <ul className='mainNavigation'>
  
      <Link to="/"  >Home</Link>

      <Link to="/country/create-tourist-activity" onClick={handleSubmit} > Crear Actividad Turistica </Link> 
      <hr />
      <span className={search.color? 'color' : 'not-color'} onClick={e=> handleClickSearch(e)} ><Search setPag={setPag} /></span>

      <ul className='Options'><p className='OptionName' onClick={e=> handleClickOptions(e)} >Filtrar por </p> <span className={options.visible? 'visible' : 'no-visible'} ><Filter data={allCountries} /></span>  </ul>

      <ul className='Options'><p className='OptionName' onClick={e=> handleClickOrder(e)} >Ordenar</p> <span className={order.visible? 'visible' : 'no-visible'}><OrderNum data={countries}/> <OrderAlf/></span></ul>
      
     </ul>
   </div>
   
  );
};

export default NavBar;