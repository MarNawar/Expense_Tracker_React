import {useState, useEffect, useContext} from 'react';
import { Transaction } from './context/context';

function IncExp(){
  const {expenseState, dispatch} = useContext(Transaction);
  
  const [history, setHistory] = useState([]);
  useEffect(()=>{    
    setHistory(()=>{
      return <ul>
      {
        expenseState.transactions.map((item) => {
          if(item.amount>0){
            return <li className="plus" key={item.id}>
              {item.text}<span>{item.amount}</span> <button className="delete-btn" onClick={()=>{
                dispatch({
                  type: "DELETE_TRANSACTION",
                  payload: item.id
                })
              }}>X</button>
            </li> 
          }
          else{
            return <li className="minus" key={item.id}>
              {item.text}<span>{item.amount}</span> 
            </li>
          }
        })
      }
      </ul>
    })
  },[expenseState]);


  return (
    <>
      <h3>History</h3>
      {history}
    </>
  )
}

export default IncExp;