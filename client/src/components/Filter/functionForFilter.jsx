
export const filterFunction = (data, property) =>{

    let filterData = []; //array de continents / activities
   
    data.forEach(obj => {
       if ( typeof obj[property] === 'string') {
           if(!filterData.includes(obj[property])){
               filterData.push(obj[property]); 
           };
       }else if(Array.isArray(obj[property])){
          obj[property].forEach( activitie => {
           if(!filterData.includes(activitie.name)){
             filterData.push(activitie.name)
           };
          }); 
        };
    });
    filterData= filterData.map(element => {
       return {label: element, value:element} 
    });
    return filterData;
   };
