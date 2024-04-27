import React, { useState } from 'react'
import { useTodo } from '../contexts/Todo'

const TodoForm = () => {

    const [todo, setTodo] = useState("")

    const { addTodo } = useTodo()

    const addTodoText = (event) => {
        event.preventDefault()
        if (!todo) return

        addTodo({todo,complete:false})
        setTodo("")
    }

    return (
        <>
            <form className='gap-5 flex' onSubmit={addTodoText}>
                <input type="text"
                    className='w-3/4 bg-slate-300 shadow-lg p-3 rounded-md text-black'
                    placeholder='Write Todo...'
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                />
                <button type="submit"
                    className='m-full bg-green-500 p-3 rounded-md shadow-lg text-white font-semibold'
                >Add</button>
            </form>
        </>
    )
}

export default TodoForm
