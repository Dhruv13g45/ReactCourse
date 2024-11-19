import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/Todo/todoSlice'


const TodoForm = () => {

    const [input, setInput] = useState("")

    const addlist = (event) => {
        event.preventDefault()

        dispatch(addTodo(input))
        setInput("")
    }

    const dispatch = useDispatch()

    return (
        <div>
            <form onSubmit={addlist}>
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
