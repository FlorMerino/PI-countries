import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../redux/actions";
import './Search.css';

const Search = ({setPag})=> {

   
const[input, setInput] = useState({name:''})

let dispatch = useDispatch();

const inputChange = (e) => {
    e.preventDefault();

    setInput({
     ...input,
     [e.target.name] : e.target.value
    });
};

const handleSubmit = (e) =>{
  e.preventDefault();

  dispatch(searchName(input));
  if(typeof setPag === 'function'){
    setPag(1);
  };
  setInput({name: ''});
};

    return(
        <div className="Search">
         
         <input className="input" type="text" placeholder="Nombre del pais..." name="name" value={input.name} onChange={e => inputChange(e)} />

         <button className="button" onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
};

export default Search;