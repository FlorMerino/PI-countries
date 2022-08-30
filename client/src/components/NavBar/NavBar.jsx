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
  e.preventDefault();
  setOrder({visible: !order.visible})
};

 const handleClickOptions = (e) =>{
    e.preventDefault();
    setOptions({visible: !options.visible})
  };
 let dispatch = useDispatch();
 
 const handleSubmit = (e)=> {
  dispatch(set([]));
  };

  return (

    <div className='head'>
      <nav>
       <h1>Countries</h1>

       <ul className='menu'>
    
         <li><p><Link to="/"  >Welcome</Link></p></li>

         <li><p><Link to="/country/create-tourist-activity" onClick={handleSubmit} > Create Tourist Activity </Link></p> </li>
         <hr />
         <li className={search.color? 'color' : 'not-color'} onClick={handleClickSearch} > 
          <span><Search setPag={setPag} /></span> 
         </li>

         <li><a onClick={e=> handleClickOptions(e)} className='filters'>Filter</a> 
            <ul className={options.visible? 'visibleSubmenu' : 'not-visibleSubmenu'} >
              <li><Filter data={allCountries} /></li> 
            </ul>
         </li>

         <li><a onClick={e=> handleClickOrder(e)} className='filters' >Sort</a> 
            <ul className={order.visible? 'visibleSubmenu' : 'not-visibleSubmenu'}>
              <li><OrderNum data={countries}/></li> 
              <li><OrderAlf/></li>
            </ul>
          </li>
       </ul>     
    </nav>

    </div>

  );
};

export default NavBar;