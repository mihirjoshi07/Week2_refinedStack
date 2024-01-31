import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
const TransactionList = () => {
  const {trans}=useContext(GlobalContext);
  
  return (
   <>

   <h3>History</h3>
      <ul  className="list">
        {trans.map(item=>(<Transaction key={item.id} itemm={item}/>))}
        
      </ul>
   </>
  )
}

export default TransactionList
