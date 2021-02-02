

const AddTransaction=()=>{
    return(
        <div>
            <h4 className="Add_Tran">Add Transaction</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label><br/>
                    <input type="text" placeholder="Detail of Transaction" id="description" width="300px" height="23px"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">Transaction Amount</label><br/>
                    <input type="number" placeholder="Income"id="transactionAmount" width="300px" height="23px"></input>
                </div>
                <button className="addtrans_btn" type="submit">Add Transaction</button>


            </form>
        </div>
    )
}
export default AddTransaction