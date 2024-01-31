import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
//Initial state
// const initialState={
//     transactions: [{ id: 1, text: 'Flower', amount: -20 },
//        { id: 2, text: 'Salary', amount: 300 },
//        { id: 3, text: 'Book', amount: -10 },
//        { id: 4, text: 'Camera', amount: 150 }
//         ]
// }


const initialState={
    transactions: []
}

//Create context


export const GlobalContext=createContext()

//create context provider
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    const deleteTransaction=(id)=>
    {
        dispatch({
            type:"deleteTransaction",
            payload:id

        });
    }

    const addTransaction=(transaction)=>
    {
        dispatch({
            type:"ADDTransaction",
            payload:transaction

        });
    }



    return(<GlobalContext.Provider value={{trans:state.transactions,deleteTransaction,addTransaction}}>
        {children}
        </GlobalContext.Provider>)
}