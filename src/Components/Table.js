import React, { useState } from 'react'

export default function Table() {
    const [tables, setTables] = useState([]);


    const insertNewRow = () => {

        let nTables = [...tables]
        nTables = [...nTables, { itemName: `Item ${tables.length + 1}` }]
        setTables(nTables)
        
    }

    const clearAll = () => {
        setTables([])
    }

    const deleteEl = (ind) => {
        let nTables = [...tables];
        nTables = nTables.filter((el, inde) => inde != ind);
        setTables(nTables);
    }


    return (


        <div>

            <h1>hiii</h1>

            <button onClick={insertNewRow}>Click</button>
            <button onClick={clearAll}>Clear All</button>

            {tables.length > 0 && tables.map((item, ind) => {
                return (
                    <tr key={ind}>
                        <td>Item {ind + 1}</td>
                        <td>

                            <input
                                value={item.amount}
                                name={`amount${ind}`}
                                //   onChange={(e)=>handleamountChange(e,ind)}
                                placeholder="Enter Amount"
                            />
                        </td>
                        <td>

                            <button className="btnd"onClick={()=>deleteEl(ind)} >Delete</button>
                        </td>
                    </tr>
                )

            })}
        </div>
    )
}
