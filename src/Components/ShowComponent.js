import React, { useState } from 'react'
import Card from './Card'

export default function ShowComponent() {

    const [show, setShow] = useState("false")

    const showhandle = () => {

        setShow("true")
        console.log(show)

    }


    const hidehandle = () => {

        setShow("false")
        console.log(show)

    }


    return (

        <>

            <button onClick={showhandle}>Show</button>
            <button onClick={hidehandle}>Hide</button>
           {show == "true" && <Card/>}
        </>
    )
}
