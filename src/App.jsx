import { useState } from "react"

function fetchTodos() {
  const result = [];
  const todos = fetchTodos();
  for (let i = 0; i < localStorage.length; i++) {
      const value = localStorage.key(i);
      result.push(value); 
  }
}


function App() {
  const [inputText, setInputText] = useState('');

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
        <li>할일 추가</li>
        <li>할일 조회</li>
        <li>할일 삭제</li>
      </ul> 
    </div>
   
  )
}

export default App
