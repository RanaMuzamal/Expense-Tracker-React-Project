import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance'
import AccountSummary from './Components/AccountSummary'

function App() {
  return (
    <div >
      <Header/>
      <div>
        <Balance/>
        <AccountSummary/>

      </div>
     
      
    </div>
  );
}

export default App;
