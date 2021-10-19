
import "./App.css"
import TodoListContainer from "./containers/TodoList.Container";
import TodoFormContainer from "./containers/TodoForm.container";
import UserListContainer from "./containers/UserList.Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
      </header>
      
    </div>
  );
}

export default App;
