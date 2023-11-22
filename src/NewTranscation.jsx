import {useState, useContext} from 'react';
import { Transaction } from './context/context';

function NewTransaction(){
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('');
  const {expenseState, dispatch} = useContext(Transaction);

  
  function addNewTransaction(e){
    e.preventDefault();

    dispatch({
      type : 'ADD_TRANSACTION',
      payload: { 
        id: Math.floor(Math.random()*10000000000),
        text: text,
        amount: amount,
      }
    })
    
    setText('');
    setAmount('');
  }

  
  
  return(
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" 
            id="text" 
            value = {text}
            onChange = {(e)=>setText(e.target.value)}
            placeholder="Enter text..." />
          <span>Required Field</span>
        </div>
        
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br/>
            (negative - expense, positive - income)
          </label>
          <input type="number" 
            id="amount" 
            value = {amount}
            onChange={(e)=>setAmount(+e.target.value)} 
            placeholder="Enter amount..."/>
          <span>Required Field</span>
        </div>
        
        <button className="btn" onClick={addNewTransaction}>
          Add transaction
        </button>
      </form>
    </>
  )
}

export default NewTransaction;