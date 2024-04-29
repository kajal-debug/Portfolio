export const reducer=(state,action)=>{
   if(action.type === "UPDATE_CATAGORY") 
   {
    return {...state,
      category: action.payload}
   } 
   if(action.type === "SCROLL") 
   {
    return {...state,
      scroll: action.payload}
   } 
   if(action.type === "LIGHT") 
   {
    return {...state,
      light: action.payload}
   } 
   if(action.type === "MAIL") 
   {
    return {...state,
      mail: action.payload}
   } 
   return state;
}