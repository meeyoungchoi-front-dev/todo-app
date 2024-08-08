import { useEffect, useState } from "react"

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
      const value = localStorage.key(i);
      result.push(value); 
  }
  return result;
}

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const storedTodos = fetchTodos();
    setTodos(storedTodos);
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputText(value);
  }

  const handleClick = () => {
    console.log('clicked');
    localStorage.setItem(inputText, inputText);
  }

  return (
    <div>
      <h1>todo app</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput}/>  
        <button onClick={handleClick}>add</button>
      </div>  
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
