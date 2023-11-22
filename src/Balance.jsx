import {useState, useContext, useEffect} from 'react';
import { Transaction } from './context/context';

function Balance(){
  const {expenseState} = useContext(Transaction);
  const [balance, setBalance] = useState(0);
  const [plus , setPlus] = useState(0);
  const [minus, setMinus] = useState(0);
  
  useEffect(()=>{
    
    setBalance(()=>{
      return expenseState.transactions.reduce((acc, expense)=>{
        return acc + expense.amount;
      },0);
    });

    setPlus(()=>{
      return expenseState.transactions.reduce((acc, expense)=>{
        return acc + (expense.amount>0? expense.amount: 0);
      },0);
    });

    setMinus(()=>{
      return expenseState.transactions.reduce((acc, expense)=>{
        return acc + (expense.amount<0? Math.abs(expense.amount): 0);
      },0);
    })
    
    
  },[expenseState]);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h2 className = "total">${balance}</h2>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${plus}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${minus}</p>
        </div>
      </div>
    </>
  )
}

export default Balance;