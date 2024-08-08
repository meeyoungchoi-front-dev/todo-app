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
  const [todos, setTodos] = useState(fetchTodos());
  
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
    // todos.push(inputText); // 원본 배열을 직접 건드리는 것은 React에서 권장하지 않는다
    setTodos((currentTodos) => {
      return [...currentTodos, inputText];
    })
    setInputText('');
  }

  const handleRemove = (todo, index) => {
    // console.log(todo, index);
    // todos.splice(index, 1);
    // console.log(todos);
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
      <h1>todo app</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput}/>  
        <button onClick={handleClick}>add</button>
      </div>  
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
    </div>
  )
}

export default App
