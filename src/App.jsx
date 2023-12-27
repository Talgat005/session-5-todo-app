import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  function onNewTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function onDeleteItem(id) {
    const newFilteredTodos = todos.filter((item) => item.id !== id);
    setTodos(newFilteredTodos);
  }
  return (
    <div>
      <TodoForm onNewTodo={onNewTodo} />
      <TodoList todos={todos} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
