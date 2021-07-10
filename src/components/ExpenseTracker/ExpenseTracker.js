
//import './ExpenseTracker.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

const ExpenseTracker = () => {
    return (
        <div className="font-sans container">
            <GlobalProvider>
                <div className='container border-2'>
                    <Header />
                    <br />
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </GlobalProvider>

        </div>
    );
}



export default ExpenseTracker
