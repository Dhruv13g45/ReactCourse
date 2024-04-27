import React, { useState } from 'react'
import { useTodo } from '../contexts/Todo'

const TodoItem = ({ todo }) => {

    const [isEditable, setisEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todoMsg)
    const { deleteTodo, toggleCompleted, updateTodo } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setisEditable(false)
    }

    const removeTodo = () => {
        deleteTodo(todo.id)
    }

    const toggleComplete = () => {
        toggleCompleted(todo.id)
    }


    return (
        <>
            <div className="todolist bg-pink-100 w-3/4 flex justify-between p-3 rounded-lg shadow-lg my-5">
                <input type="checkbox"
                    checked={todo.complete}
                    onChange={toggleComplete}
                />
                <input type="text"
                    className={`w-3/4 bg-transparent z-50 text-black font-semibold border-2 border-slate-700 rounded-md
                    ${todo.complete ? "line-through" : "text-black"}`}
                    value={todoMsg}
                    readOnly={!isEditable}
                    onChange={(e) => setTodoMsg(e.target.value)}
                />

                <button onClick={
                    () => {
                        if (todo.complete) {
                            editTodo()
                        }
                        else {
                            setisEditable((prev) => !prev)
                        }
                    }
                }
                    disabled={todo.complete}
                >
                    {
                        isEditable ? "📂" : "✏️"
                    }
                </button>
                <button onClick={removeTodo}>❌</button>
            </div>
        </>
    )
}

export default TodoItem
