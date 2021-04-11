import React ,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
const initialState={
      transaction:[
          
      ]
}
// create global state
export const GlobalContext=createContext(initialState);
// create provider for global state
 const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    // Delete Action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        }); 
    }
    function AddTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction,
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transaction,
                deleteTransaction,
                AddTransaction,
            }
        }>
            {children}
        </GlobalContext.Provider>);
}
export default GlobalProvider;

