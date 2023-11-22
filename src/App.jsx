import { useState } from 'react'
import './App.css'
import Balance  from './Balance';
import IncExp from './IncExp';
import NewTransaction from './NewTranscation'
export default function App() {
  return (
    <main>
      <div className="container">
        <h1 style={{textAlign:'center'}}>Expense Tracker</h1>
        <Balance/>
        <IncExp/>
        <NewTransaction/>
      </div>
    </main>  
  )
}
