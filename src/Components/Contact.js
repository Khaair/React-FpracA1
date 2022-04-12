import React, { useState } from 'react'

export default function Contact() {
    const [tables, setTables] = useState([])

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



    return (


        <div>

            <button  onClick={insertrow}>Create Contact</button>

            {tables.length > 0 && tables.map((item, ind) => {
                return (
                    <tr key={ind}>
                        <td>ID{ind + 1}</td>
                        <td><input
                            value={item.amount}
                            name={`amount${ind}`}
                            // onChange={(e) => handleamountChange(e, ind)}
                            placeholder="Enter Name" /></td>

                        <td><input
                            value={item.amount}
                            name={`amount${ind}`}
                            // onChange={(e) => handleamountChange(e, ind)}
                            placeholder="Enter Mobile Number" /></td>

                        <td><input
                            value={item.amount}
                            name={`amount${ind}`}
                            // onChange={(e) => handleamountChange(e, ind)}
                            placeholder="Enter Gmail" /></td>
                        <td><button onClick={() => deleteR(ind)} >Delete</button></td>
                    </tr>
                )
            })}
        </div>
    )
}
