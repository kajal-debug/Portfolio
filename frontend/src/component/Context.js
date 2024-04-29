import React,{createContext,useContext,useReducer} from "react";
import { reducer } from "./Reducer";
export const GlobalContext = createContext();
const initialState ={
    category:"",
    scroll:false,
    light:false,
    mail:{},
}
export const GlobalProvider =({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
  const updateCategory = (experience)=>{
    console.log("experience",experience)
        return dispatch({
            type:"UPDATE_CATAGORY",
             payload:experience?experience:""

        })
    }
    const Scroll = (values)=>{
       
            return dispatch({
                type:"SCROLL",
                 payload:values
    
            })
           
        }
        const Light = (values)=>{
       console.log("from light",values)
            return dispatch({
                type:"LIGHT",
                 payload:values
    
            })
        }

        const Mail = (values)=>{
            console.log("from mail",values)
                 return dispatch({
                     type:"MAIL",
                      payload:values
         
                 })
             }
return  <GlobalContext.Provider value={{state,updateCategory,Scroll,Light,Mail}}>
        {children}
    </GlobalContext.Provider>
}
export const GlobalConsumer =()=>{
    return useContext(GlobalContext);
}