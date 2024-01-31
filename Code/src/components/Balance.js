import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
  const {trans}=useContext(GlobalContext);
  const amount=trans.map(item=>(
    item.amount
  ))
  const total=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
    </>
  )
}

export default Balance
