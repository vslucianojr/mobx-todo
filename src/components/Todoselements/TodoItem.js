import React from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../TodoList/TodosStore";

export default function TodoItem({ code }) {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.todos.map((todo, index) => (
        <div
          key={index}
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li style={{ color: "white" }}>
            {todo.done ? (
              <h3>
                <s>{todo.name}</s>
              </h3>
            ) : (
              <h3>{todo.name}</h3>
            )}
          </li>
          <button
            style={{ marginLeft: "8px", maxHeight: 30 }}
            onClick={() => store.toggle(todo)}
          >
            {todo.done ? "Desfazer" : "Concluir"}
          </button>
          <button
            style={{ marginLeft: "8px", maxHeight: 30 }}
            onClick={() => store.delete(todo)}
          >
            Excluir
          </button>
        </div>
      ))}
    </ul>
  ));
}
