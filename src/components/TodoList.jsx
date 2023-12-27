import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteItem }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  );
};
