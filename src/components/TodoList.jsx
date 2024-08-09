import { useEffect, useState } from "react";



function TodoList({todos}) {
    
   
    
    const handleRemove = (todo, index) => {
        const result = todos.filter(todoItem => {
            if (todoItem !== todo) {
            return true;
            }
        })
        setTodos(result);
        localStorage.removeItem(result);
    }
  return (
    <ul>
       
        {
        // eslint-disable-next-line react/prop-types
        todos.map((todo, index) => (
            <li key={index}>
            <span>
                {todo}
            </span>
            <button onClick={() => handleRemove(todo, index)}>remove</button>
            </li>
        ))}
    </ul>
  )
}

export default TodoList