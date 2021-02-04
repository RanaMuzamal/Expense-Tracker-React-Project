import React ,{useContext} from 'react';

//import global provider
import GlobalContext from '../context/GlobalState'
//import Transaction
import Transaction from './Transaction'
const TransactionHistory = ()=>{
    const { transactions }=useContext( GlobalContext);
    
    return(
        <div >
            <h3>Transaction History</h3>
            <ul className="history">
            {transactions.map(transaction => (
                    <Transaction key={ transaction.id } transaction={ transaction } />
                    )
                )}
                     
            </ul>
        </div>
    )
}
export default TransactionHistory;