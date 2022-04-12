import React, { useState } from 'react'
import Card from './Card';

export default function TableTwo() {


    const [tables, setTables] = useState([])


    const handleamountChange = (e,ind) => {
        let cptables=[...tables];
        let mobj=cptables.map((el,no)=>{
          if(no==ind){
            el.amount=e.target.value;
          }
          return el;
        })
        setTables(mobj);
        };
      

    const insertrow = () => {
        let ntables = [...tables]
        ntables = [...ntables, { ItemName: `item ${tables.length + 1}` }]
        setTables(ntables)
        
    }

    const deleteR = (ind) => {
        let ntables = [...tables]
        ntables = ntables.filter((el, inde) => inde != ind)
        setTables(ntables)

    }

    const reset = () => {
        setTables([])
    }

    const handleSubmit = () =>{
        console.log(tables[0])
    }


    return (
        <div>
            <button onClick={insertrow}>Insert</button>
            {tables.length >= 2 && <button onClick={reset}>Clear All</button>}
            <button onClick={handleSubmit}>Submit</button>

            {tables.length > 0 && tables.map((item, ind) => {
                return (
                    <tr key={ind}>
                        <td>Item {ind + 1}</td>
                        <td><input 
                            value={item.amount}
                            name={`amount${ind}`}
                            onChange={(e) => handleamountChange(e, ind)}
                            placeholder="Enter Amount" /></td>
                        <td><button onClick={() => deleteR(ind)}>Delete</button></td>
                    </tr>
                )
            })}

     {tables.map((item,ind)=><Card key = {ind} ItemName={item.ItemName} amount = {item.amount}/>)}
 
        </div>
    )
}
