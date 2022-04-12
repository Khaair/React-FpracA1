import React from 'react'
import Card from './Components/Card'
import Contact from './Components/Contact'
import ShowComponent from './Components/ShowComponent'
import Table from './Components/Table'
import TableTwo from './Components/TableTwo'

import Data from './data.json'

export default function App() {

 
  return (
    <div>
      {/* {Data.map((item,ind)=><Card key = {ind} titleText={item.title} descText = {item.desc}/>)} */}

    <ShowComponent/>


     
    </div>
  )
}
