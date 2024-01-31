import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
const Transaction = ({itemm}) => {
 const {deleteTransaction}=useContext(GlobalContext)
  const sign=itemm.amount > 0 ? "+" : "-";
  return (
    
      <li className={sign==="-" ? "minus":"plus"}>
          {itemm.text} <span>{sign}${(Math.abs(itemm.amount))}</span>
          <button onClick={()=>deleteTransaction(itemm.id)} className="delete-btn">x</button>
        </li>
  )
}

export default Transaction
