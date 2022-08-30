

export const filterCoun_Act = (dataPayload,allCountries) =>{
 // {
 //   continent :  ['Asia', 'Europa'],
 //   Tourist_activities:  ['canotaje', 'cabalgata'] 
 // } 
 let filterCountries = [];
  if(dataPayload.continent.length===0 && dataPayload.Tourist_activities.length===0){
    return 'Inserte el tipo de filtrado';
  }
  else if(dataPayload.continent.length===0){

   for (let i = 0; i < dataPayload.Tourist_activities.length; i++) { // ['canotaje', 'cabalgata']
    const activitieSearch = dataPayload.Tourist_activities[i];   //'canotaje'
      allCountries.forEach(country => {
         country.Tourist_activities.forEach(activitie =>{
            if(activitie.name===activitieSearch){
               filterCountries.push(country)
            }
         })
       })
   }
 }else if(dataPayload.Tourist_activities.length===0){

    for (let i = 0; i < dataPayload.continent.length; i++) { // [ 'Asia', 'Europa']
        const continentSearch = dataPayload.continent[i];   // 'Asia'
        allCountries.forEach(country => {
           if(country.continent===continentSearch){
             filterCountries.push(country)
            }
        })
    }
 }else{
    for (let i = 0; i < dataPayload.continent.length; i++) {
        const continentSearch= dataPayload.continent[i]; //Asia
    
        for (let i = 0; i < dataPayload.Tourist_activities.length; i++) {
            const activitieSearch = dataPayload.Tourist_activities[i]; //canotaje
            
            allCountries.forEach(country => {            
                country.Tourist_activities.forEach(activitie =>{
                    if(activitie.name===activitieSearch && country.continent===continentSearch){
                       filterCountries.push(country)
                    }
                 })
            });
        }      
    }
 }
 if(filterCountries.length===0){
    return `No se encontro la actividad turistica ${dataPayload.Tourist_activities.join(', ')} 
    en el continente ${dataPayload.continent.join(', ')}`
 }
 return filterCountries;
};

export const orderPopulation= (dataPayload, countries)=>{
   let orderNumPopulation= [...countries];
   let orderDesc;
   let orderAscendant= orderNumPopulation.sort((a, b) => a.population - b.population)
   
   if(dataPayload === 'ASCENDANT'){
    return orderAscendant;
   }else if(dataPayload === 'DESCENDENTE'){
      orderDesc = orderAscendant.reverse();
    return orderDesc;
   };
};

export const orderAlf = (dataPayload,countries)=> {
   let allCountries = [...countries]; 
            
   let orderAlfCountry = allCountries.sort((a,b) =>{
   if(a.name < b.name) {
    return dataPayload==='ASCENDANT'? -1 : 1; //ultimo caso cuando este en des y quiera llevarlo a asc
   }
   if(a.name > b.name){
    return dataPayload === 'DESCENDENTE'? -1 : 1;
   }
   return 0;
   });

   return orderAlfCountry;   
};