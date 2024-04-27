import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './contexts/Todo'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    console.log("added in todo")
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const deleteTodo = (id) => {
    console.log("deleted todo")
    setTodos((prevArray) => prevArray.filter((prevElement) => prevElement.id !== id))
  }

  const toggleCompleted = (id) => {
    console.log("toggeled ")
    setTodos((prevArray) => prevArray.map((prevElement) => prevElement.id === id ? { ...prevElement, complete: !prevElement.complete } : prevElement))
  }

  const updateTodo = (id, todo) => {
    console.log("updated todo")
    setTodos((prevArray) => prevArray.map((prevElement) => prevElement.id === id ? todo : prevElement))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <TodoContextProvider value={{ todos, addTodo, deleteTodo, toggleCompleted, updateTodo }}>
        <div className="main min-h-screen bg-slate-700 flex flex-col items-center px-20 py-10">
          <div className="form w-full">
            <TodoForm />
          </div>
          {
            todos.map((todo) => (
              <div key={todo.id} className="w-full" >
                <TodoItem todo={todo} />
              </div>
            ))
          }
        </div>
      </TodoContextProvider >
    </>
  )
}

export default App
