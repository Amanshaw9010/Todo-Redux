import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../action/Index';


const Todo = () => {
  const [inputData, setInputData] = useState(" ");
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(" ");


  return (
    <>
      <div className="backdrop">
        <h1>Todo List</h1>
        <div className="container">
          <input type="text"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <button onClick={() => { dispatch(addTodo(inputData), setInputData(" ") , setDisplay(inputData)  ) }}>+</button>
          <h1>{display}</h1>
        </div>
      </div>
    </>
  )
}

export default Todo
