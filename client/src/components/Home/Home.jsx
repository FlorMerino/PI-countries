import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCountries} from '../../redux/actions/index';
import NavBar from '../NavBar/NavBar';
import Pagination from '../Pagination/Pagination';
import Country from '../CountryCards/Country';
import './Home.css'

const Home = ()=>{
 
  let allCountries = useSelector(state => state.allCountries);
  let countries= useSelector(state => state.countries);
  
  const [pag, setPag] = useState(1);  
  let countriesPerPage = 10;        
    
  const max= countries.length / countriesPerPage;

  let element0 =0;   
  let element1 =0;   
  if(pag ===1){
    countriesPerPage=9;
  }else if(pag >= 2){
    countriesPerPage=10;
    element0=1;             
    if(pag===max) element1=1;
  }
    let firstCountry = ((pag-1)* countriesPerPage)-element0;  
    let lastCountry = firstCountry + countriesPerPage + element1;  
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCountries());
  },[dispatch]);
  
    return(
        <div>
         <NavBar countries={countries} allCountries={allCountries} setPag={setPag} ></NavBar>
        
         <div className='allCountries' >
             
           { typeof countries === 'string'?
             <p>{countries}</p>:
           countries.length>0 ? 
           countries.slice(firstCountry,lastCountry).map( countrie => {
           return <Country key={countrie.id} id={countrie.id} name={countrie.name} 
           continent={countrie.continent}  img={countrie.image} />
           }):
           <img className='image' src="https://s3.amazonaws.com/media2-ruleoneinvesting-com/invest/attendees/plane-s.gif" alt="loading" />
           }
         </div>
      
         <Pagination pag={pag} setPag={setPag} max={max} countries={countries}></Pagination>

        </div>
    )
};

export default Home;