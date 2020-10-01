import React, { useState, useContext } from "react";
import { StoreContext } from "../TodoList";

export default function TodosInput() {
  const store = useContext(StoreContext);
  const [todo, setTodo] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        store.addTodo({ name: todo, done: false });
        setTodo(""); //Limpando Input
      }}
    >
      <input
        type="text"
        placeholder="Insira uma nova Tarefa"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button style={{ marginLeft: "8px" }} type="submit">
        Add
      </button>
    </form>
  );
}
