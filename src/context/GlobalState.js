import React , { createContext,useReducer } from 'react';

// import Reducer
import AppReducer from './AppReducer'

//create initial state
const initialState={
    transaction:[
        {id:1,description:"Income 1",transactionAmount:1000},
        {id:2,description:"Expense 1",transactionAmount:-100},
        {id:3,description:"Income 2",transactionAmount:2000},
        {id:4,description:"Expense 2",transactionAmount:-1000}
    ]
}
// create global state
export const GlobalContext=createContext(initialState);
// create provider for global state
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    return(
        <GlobalContext.Provider value={
            {
                transaction:state.transaction
            }
        }>
            {children}
        </GlobalContext.Provider>


    )
}
