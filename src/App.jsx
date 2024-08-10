import { useEffect, useState } from "react"
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
      const value = localStorage.key(i);
      result.push(value); 
  }
  return result;
}
  function App() {
    const [todos, setTodos] = useState(fetchTodos());
    useEffect(() => {
      const storedTodos = fetchTodos();
      setTodos(storedTodos);
  }, []);

  const addTodo = (todo) => {
    console.log('clicked');
    localStorage.setItem(todo, todo);    
    setTodos((currentTodos) => {
      return [...currentTodos, todo];
    })
  }
  
  const removTodo = (todo) => {
    const result = todos.filter(todoItem => {
        if (todoItem !== todo) {
        return true;
        }
    })
    setTodos(result);
    localStorage.removeItem(result);
  }
 
  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removTodo}  />
    </div>
  )
}

export default App
