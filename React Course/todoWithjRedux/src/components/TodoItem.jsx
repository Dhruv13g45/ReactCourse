import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/Todo/todoSlice'

const TodoItem = () => {

    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)


    const [todomsg, setTodomsg] = useState(todos)

    const [edit, setEdit] = useState(false)


    const editTodo = (todo) => {
        console.log(todo)
        dispatch(updateTodo(todo))
        console.log("edited")
        setEdit((prev) => !prev)
    }



    return (
        <>

                {
                    todos.map((todo) => (
                        <div key={todo.id}>
                            <input type="text"
                                value={todo = todo.text + todomsg}
                                readOnly={!edit}
                                onChange={(e) => setTodomsg(e.target.value)}
                            />
                            <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                            <button type="button" onClick={() => editTodo(todomsg)}>Edit</button>
                        </div>
                    ))
                
                }
        </>
    )
}

export default TodoItem
