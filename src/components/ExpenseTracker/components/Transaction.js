import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);


    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={`${transaction.amount < 0 ? "bg-green-300" : "bg-red-300"}`}>
            <div className='px-2 py-2 flex justify-between'>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            </div>
            <button onClick={() => deleteTransaction(transaction.id)}
                className={`px-2 py-1 bg-red-500 absolute transform -translate-x-6 -translate-y-8 opacity-0 hover:opacity-50`}>
                X
            </button>
        </li>
    )
}
