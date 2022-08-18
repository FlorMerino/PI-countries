import './Pagination.css'

const Pagination= ({pag,setPag,max,countries}) =>{

 const prevHandler = () =>{
   setPag(pag-1)
 }

 const nextHandler = () =>{
   setPag(pag+1)
 }
 
  return(
    <footer>
       {
        countries.length>0?
        <div className='Pag'>
        <button className="button" disabled={pag <= 1 } onClick={prevHandler} >anterior</button>
        <p>Pagina {pag}</p>
        <button className="button" disabled={pag >= max} onClick={nextHandler}>siguiente</button>
        </div>
        :
        <p></p>
    }

    </footer>

  )

};

export default Pagination;