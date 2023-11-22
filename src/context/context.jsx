import { createContext, useReducer } from "react";
import {expenseReducer} from './reducer'

export const Transaction = createContext();

// {id:1,text: "Laptop",amount: 100},{id:2,text: "Ipad",amount: -10}

function Context({children}){
  
  const [expenseState, dispatch] = useReducer(expenseReducer, {
      transactions: []
    });
  
  return (
    <Transaction.Provider 
      value={{
        expenseState, dispatch
      }}
    >
      {children}
    </Transaction.Provider>
  )
}

export default Context;