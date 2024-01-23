const AppReducer= (state,action)=>{
    switch(action.type){
        case "deleteTransaction":
            return{...state,transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)}
        
        case "ADDTransaction":
            return{...state,
                transactions:[action.payload, ...state.transactions]
            }    
        default:
            return state;
    }
}
export default AppReducer