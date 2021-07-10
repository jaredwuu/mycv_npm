import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount

        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }
    return (
        <div className='container'>
            <h4 className='font-bold'>Add new transaction</h4>
            <hr/>
            <form onSubmit={onSubmit}>
                <div className="input-field">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div style={{ marginTop: '-15px' }}>
                    <label htmlFor="amount">Amount <br />(negative-expense),positive-income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="text-center py-6">
                    <button className='px-10 py-3 light-blue darken-4 rounded ' type="submit" >
                        Add transaction
                    </button>
                </div>
            </form>
        </ div>
    )
}
