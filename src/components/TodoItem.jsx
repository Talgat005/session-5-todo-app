export const TodoItem = ({ title, age, password, id, onDeleteItem }) => {
  return (
    <li>
      {title} {age},{password}{" "}
      <button onClick={() => onDeleteItem(id)}>delete</button>
    </li>
  );
};
