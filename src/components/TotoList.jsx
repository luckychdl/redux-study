
const TodoList =({todos})=>{
  return <ul>{todos.map((todos) => {
    return <li>{todos.text}</li>
  })}</ul>
}

export default TodoList