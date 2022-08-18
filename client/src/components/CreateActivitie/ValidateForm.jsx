


const Validate = (input)=> {
  let errors = {};
  let hour= input.duration[0]+input.duration[1]
  if(!input.name){
    errors.name = 'Debe introducir el nombre de la actividad';
  }else if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚÇç]+$/.test(input.name)){
   errors.name= 'El nombre no debe contener caracteres especiales' 
  }
  else if(input.name.length <3){
    errors.name = 'Ingrese minimo de 3 caracteres';
  }else if (input.name.length>26){
    errors.name = 'Ingrese maximo de 26 caracteres'
  } 
  if(parseInt(hour)>20){
    errors.duration= 'No debe superar las 20hs'
  }
 
  return errors;

};


export default Validate;