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
 

 
  


  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
