const {Tourist_activity, Country} = require('../db');


const confirmationActivitie = async(name, duration,difficulty,season,countryId)=> {
    if(name && duration){
        const newActivitie = await Tourist_activity.create({
            name,
            difficulty,
            duration,
            season,
        });
      if(countryId){
       for (let i=0; i< countryId.length; i++ ) {
        let country = await Country.findOne( {where: {id: countryId[i]} } );
        await newActivitie.addCountry(country);
       };
      }
      
     return `Your ${name} tourist activity was successfully created.`;
    }
    else return'Required fields are missing';
};

module.exports= {
 confirmationActivitie,
}