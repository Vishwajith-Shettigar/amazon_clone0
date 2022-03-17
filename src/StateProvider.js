import React, {createContext, useContext, useReducer} from "react"


//data layer
export const StateContext= createContext();


// building provider

export const StateProvider=({reducer,initialState, children})=>(
    
    <StateContext.Provider value={useReducer(reducer,initialState)}>

    {children}
    </StateContext.Provider >
    
    );

// usuisng it in component 
 
export  const useStateValue=()=> useContext(StateContext)

