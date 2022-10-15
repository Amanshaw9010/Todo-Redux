import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../action/Index';
import '../CSS/todo.css';
import todoReducer from '../reducer/TodoReducer';




const Todo = () => {
  const [inputData, setInputData] = useState(" ");
  const dispatch = useDispatch();

  const list = useSelector((state) =>
    state.todoReducer.list
  )

  console.log(list);

  return (
    <>
      <div className="backdrop">
        <h1>Todo List</h1>
        <div className="container">
          <div className="input_container">
            <input type="text"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <button onClick={() => { dispatch(addTodo(inputData), setInputData(" ")) }}>+</button>
          </div>
          {
            list.map((elem) => {
              return (
                <div className='shoeItems' key={elem.id}>
                  <h3>{elem.data}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Todo
