import React from "react";
import { useState } from "react";
export const TodoForm = ({ onNewTodo }) => {
  const [value, setValue] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  function handleInputSubmit() {
    const newTodo = {
      title: value,
      age,
      password,
      id: Date.now().toString(),
    };

    onNewTodo(newTodo);
    setValue("");
    setAge("");
    setPassword("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleInputSubmit}>ADD TODO</button>

      <h1>{}</h1>
    </form>
  );
};
