import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction =>transaction.amount);

    const income = amounts
          .filter(item=>item>0)
          .reduce((acc,item) =>(acc+=item),0)
          .toFixed(2);

    const expense = amounts
            .filter(item=>item<0)
            .reduce((acc,item) =>(acc-=item),0)
            .toFixed(2);

    return (
        <div className="container border-2 row bg-gray-50">
            <div className="col s6 center border-r-2">
                <h4>Income</h4>
                <p className="text-green-500 text-3xl pb-2">${income}</p>
            </div>
            <div className="col s6 center">
                <h4>Expense</h4>
                <p className="text-red-500 text-3xl pb-2">${Math.abs(expense)}</p>
            </div>
            
        </div>
    )
}
