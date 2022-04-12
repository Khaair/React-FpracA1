import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div >
    <div className="card">
            <h2>Item Name: {props.ItemName}</h2>
          
            <p>Amount: {props.amount} </p>
          </div>
    </div>
  )
}
