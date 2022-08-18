import React from "react";
import { Link } from 'react-router-dom';
import './Landing.css';

const LandingPage = ()=> {
    
    return (
     <div className="Home" >
      <Link to="/home"> <button className="buttonExplo" > Explorando el mundo</button></Link>
     </div>
    )
}
export default LandingPage;