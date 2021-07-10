import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction =>transaction.amount);
    const total = amounts.reduce((acc, item) =>(acc+=item),0).toFixed((2));
    return (
        <div className="container">
            <h4 className="uppercase">Balance</h4>
            <p className="text-4xl font-bold">${total}</p>
        </div>
    )
}
