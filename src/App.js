import logo from './logo.svg';
import './App.css';
//import Global Provider
import {GlobalProvider} from './context/GlobalState'


//import components
import Header from './Components/Header'
import Balance from './Components/Balance'
import AccountSummary from './Components/AccountSummary'
import TransactionHistory from './Components/TransactionHistory'
import AddTransaction from './Components/AddTransaction'

function App() {
  return (
    <GlobalProvider>
      <div className="body">
        <Header/>
        <div className="balanceDetails">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
