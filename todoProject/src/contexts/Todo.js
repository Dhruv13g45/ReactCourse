import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {
        todos: [
            {
                id: 1,
                todoMsg: "this is a todo message",
                complete: false,
            },
        ],
        addTodo: (todo) => { },
        updateTodo: (id, todo) => { },
        deleteTodo: (id) => { },
        toggleCompleted: (id) => { },
    }
)


export const TodoContextProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext)
}