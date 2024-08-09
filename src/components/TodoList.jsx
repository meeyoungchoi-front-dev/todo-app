function TodoList({todos, onTodoRemove}) {
  return (
    <ul>
        {todos.map((todo, index) => (
            <li key={index}>
            <span>
                {todo}
            </span>
            <button onClick={() => onTodoRemove(todo, index)}>remove</button>
            </li>
        ))}
    </ul>
  )
}

export default TodoList