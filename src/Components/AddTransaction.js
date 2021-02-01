

const AddTransaction=()=>{
    return(
        <div>
            <h4>Add Transaction</h4>
            <form>
                <div>
                    <label htmlFor="description">Description</label><br/>
                    <input type="text" placeholder="Project1 Income" id="description"></input>
                </div>
                <div>
                    <label>Transaction Amount</label><br/>
                    <input type={Number} placeholder="Project1 Income"></input>
                </div>

            </form>
        </div>
    )
}
export default AddTransaction