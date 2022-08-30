
import './Pagination.css'

const Pagination= ({pag,setPag,max,countries}) =>{

 const prevHandler = () =>{
   setPag(pag-1)
 }
 
 const nextHandler = (e) =>{
  let sum= pag+1;
   setPag(sum)
 }
 const handleChange = (e) =>{
  setPag(parseInt(e.target.innerHTML))
 }

 let numbrerPages= [];
 for (let i = 1; i < max+1; i++) {
   numbrerPages.push(i);
  }

  return(
    <footer>
       {typeof countries ==='string'?
        <p></p>:
        countries.length>0?
        <div className='Pag'>
        <button className={pag <= 1? 'not-button' :'button'} disabled={pag <= 1 } onClick={prevHandler} >previous</button>
        { 
         <div className='numPage' >
          {
            numbrerPages.map(num =>{
              return <a className={num===pag? 'colorNum': 'not-colorNum'} key={num} onClick={handleChange}>{num}</a>
            })
          }
         </div>
        }
        <button className={pag >= max? 'not-button' :'button'} disabled={pag >= max} onClick={nextHandler}>next</button>
        </div>
        :
        <p></p>
    }

    </footer>

  )

};

export default Pagination;