import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState('');

  const handleInput = (e) => {
    const value = e.target.value;
    setInputText(value);
  }

  return (
    <div>
      <h1>todo app</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput}/>  
        <button>add</button>
      </div>   
    </div>
  )
}

export default App
