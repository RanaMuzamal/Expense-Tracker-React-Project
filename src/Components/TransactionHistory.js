import React from 'react';

const TransactionHistory = ()=>{
    return(
        <div >
            <h3>Transaction History</h3>
            <ul className="history">
                <li className="incomeHistory">
                    Project 1 Income
                    <span >$1000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="expenseHistory">
                    Project 1 Salary
                    <span >-$1000</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
export default TransactionHistory;