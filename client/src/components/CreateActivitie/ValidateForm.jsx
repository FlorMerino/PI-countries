


const Validate = (input)=> {
  let errors = {};
  let hour= input.duration[0]+input.duration[1]
  if(!input.name){
    errors.name = 'You must enter the name of the activity';
  }else if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚÇç]+$/.test(input.name)){
   errors.name= 'The name must not contain special characters' 
  }
  else if(input.name.length <3){
    errors.name = 'Enter a minimum of 3 characters';
  }else if (input.name.length>26){
    errors.name = 'Enter maximum of 26 characters'
  } 
  if(parseInt(hour)>20){
    errors.duration= 'Must not exceed 8:00 p.m.'
  }
 
  return errors;

};


export default Validate;