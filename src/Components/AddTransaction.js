import React , {useState} from 'react';

const AddTransaction=()=>{
    const [description,setDescription] = useState();
    const [transactionAmount,setTransactionAmount]=useState();
    return(
        <div>
            <h4 className="Add_Tran">Add Transaction</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label><br/>
                    <input 
                        type="text"
                         placeholder="Detail of Transaction"
                          id="description"
                           width="300px" 
                           height="23px"
                           value={description}
                           onChange={(e)=>setDescription(e.target.value)}> 
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">Transaction Amount</label><br/>
                    <input 
                        type="number" 
                        placeholder="Income"
                        id="transactionAmount" 
                        width="300px" 
                        height="23px"
                        value={transactionAmount}
                        onChange={(e)=>setTransactionAmount(e.target.value)}>
                    </input>
                </div>
                <button className="addtrans_btn" type="submit">Add Transaction</button>


            </form>
        </div>
    )
}
export default AddTransaction