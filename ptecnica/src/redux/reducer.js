export const nameUp= ( value ) => {
  return ({
    type: "nameUp",
    value: value
  });
}

export const priceUp = ( value ) => {
  return ({
    type: "priceUp",
    value: value
  });
}

export const reducer = (state, action) => {
  
  let newState = {...state};
  switch(action.type){

    case "nameUp": 
      newState.form.nombre = action.value;
      return newState;

    case "priceUp": 
      newState.form.precio = action.value;
      return newState;
      

    default:
      return newState;

  }


}