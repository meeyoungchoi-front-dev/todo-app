import { useState } from "react";

function TodoInput() {
    const [inputText, setInputText] = useState('');
    const handleInput = (e) => {
        const value = e.target.value;
        setInputText(value);
      }
    
      const handleClick = () => {
        console.log('clicked');
        localStorage.setItem(inputText, inputText);    
        setTodos((currentTodos) => {
          return [...currentTodos, inputText];
        })
        setInputText('');
      }
    



    return <div>
                <input type="text" value={inputText} onChange={handleInput}/>  
                <button onClick={handleClick}>add</button>
            </div>  
}

export default TodoInput;