import { useState, useContext } from 'react';
import { Transaction } from './context/context';

function NewTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0);
  const [inputTextClasses, setInputTextClasses] = useState('form-control');
  const [inputAmountClasses, setInputAmountClasses] = useState('form-control');
  const { dispatch } = useContext(Transaction);


  function addNewTransaction(e) {
    e.preventDefault();

    if (text === '' || amount === '') {
      if (text === '') {
        setInputTextClasses('form-control failure');
      }
      else {
        setInputTextClasses('form-control success');
      }

      if(amount === ''){
        setInputAmountClasses('form-control failure');
      }
      else{
        setInputAmountClasses('form-control success');
      }
    }
    else {
      setInputTextClasses('form-control success');
      setInputAmountClasses('form-control success');

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: {
          id: Math.floor(Math.random() * 10000000000),
          text: text,
          amount: amount,
        }
      });

      setTimeout(() => {
        setInputTextClasses('form-control');
        setInputAmountClasses('form-control');
      }, 500);

      setText('');
      setAmount('');
    }
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className={inputTextClasses}>
          <label htmlFor="text">Text</label>
          <input type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..." />
          <span>Required Field</span>
        </div>

        <div className={inputAmountClasses}>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number"
            id="amount"
            value={amount===0?'':amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Enter amount..." />
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