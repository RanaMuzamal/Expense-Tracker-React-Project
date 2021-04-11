import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'

import GlobalProvoder from './context/GlobalState'


function App() {
  return (
    <GlobalProvoder >
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>   
    </GlobalProvoder>  
  );
}

export default App;
