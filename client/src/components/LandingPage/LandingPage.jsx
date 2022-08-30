import React from "react";
import { Link } from 'react-router-dom';
import './Landing.css';

const LandingPage = ()=> {
    
    return (
     <div className="LandingPag" >

     <Link to="/home/"><h1>👉Explore</h1>  </Link>
     </div>
    )
}
export default LandingPage;