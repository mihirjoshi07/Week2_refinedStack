import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
const IncomeExpenses = () => {

  const {trans}=useContext(GlobalContext);
  const amount=trans.map(item=>(
    item.amount
  ))
  let exp=0;
  let inc=0; 
  for (let i in amount){
    if(amount[i]<0){
      exp=exp+amount[i];
    }
    else{
      inc=inc+amount[i];
    }
  }
  
  return (
    <div>
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${inc.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${Math.abs(exp).toFixed(2)}</p>
        </div>
      </div>

    </div>
  )
}

export default IncomeExpenses
