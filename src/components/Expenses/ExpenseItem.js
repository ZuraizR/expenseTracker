import React from 'react'
import { useState } from 'react'

import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  //   let month = props.date.toLocaleString('en-US', { month: 'long' })
  //   let year = props.date.getFullYear()
  //   let day = props.date.toLocaleString('en-US', { day: '2-digit' })
  // let title = props.title
  // Using useState to change the title value //
  // const [newTitle, setNewTitle] = useState('')
  // const [title, setTitle] = useState(props.title)

  // const handleClick = () => {
  //   setTitle(newTitle)
  // }

  // const handleChange = (e) => {
  //   setNewTitle(e.target.value)
  // }

  return (
    <Card className='expense-item'>
      {/* Breaking in Multiple Components */}
      {/* <div>
        <span>{day}</span> <span>{month}</span> <span>{year}</span>
      </div> */}
      <ExpenseDate date={new Date(props.date)} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <input
        type='text'
        value={newTitle}
        onChange={handleChange}
        placeholder='Enter title here...'
        title='Enter Title'
      />
      <button onClick={handleClick} title='Click here to change title'>
        Change Title
      </button> */}
    </Card>
  )
}

export default ExpenseItem
