import React , {useState} from 'react'
import {useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text,setText]=useState(' ');
    const [amount,setAmount]=useState(0);
    const {AddTransaction}=useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        AddTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-Control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text here " value={text} onChange={(e)=> setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount here "/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
