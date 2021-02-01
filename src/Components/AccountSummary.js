import React from 'react';

const AccountSummary = ()=>{
    return(
        <div className="accountDetails">
            <div  className="Inc">
                <h4>Income</h4>
                <p  className="income">
                    0.00
                </p>
            </div>
            <div className="Exp"> 
                <h4>Expense</h4>
                <p  className="expense">
                    0.00
                </p>
            </div>
        </div>
        
    );
}
export default AccountSummary;
