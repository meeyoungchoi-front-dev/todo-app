import { useEffect, useState } from "react";


function fetchTodos() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
        const value = localStorage.key(i);
        result.push(value); 
    }
    return result;
}
  
function TodoList() {
    const [todos, setTodos] = useState(fetchTodos());
        
    useEffect(() => {
        const storedTodos = fetchTodos();
        setTodos(storedTodos);
    }, []);
    
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
        {todos.map((todo, index) => (
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