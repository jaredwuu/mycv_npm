import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'
import '../ExpenseTracker.css'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div className='container'>
            <h4 className='font-bold'>History</h4>
            <hr />
            <ul id="list" className="">
                {transactions.map(transaction=>( <Transaction key={transaction.id} transaction={transaction}/>))}   
            </ul>            
        </div>
    )
}
