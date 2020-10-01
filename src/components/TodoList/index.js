import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import TodosInput from "../Todoselements/TodosInput";
import TodosHeader from "../Todoselements/TodosHeader";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    todos: [{ name: "Conectar a VPN", done: false }],
    addTodo: (todo) => {
      store.todos.push(todo);
    },
    toggle(todo) {
      todo.done = !todo.done;
    },
    get todosCount() {
      return store.todos.length;
    },
    get todosNotDone() {
      return store.todos.filter((todo) => todo.done === false).length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const Todos = ({ code }) => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul code={code}>
      {store.todos.map((todo, index) => (
        <div
          key={index}
          code={code}
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
        </div>
      ))}
    </ul>
  ));
};

export default function TodoList() {
  return (
    <StoreProvider>
      <div>
        <TodosHeader />
        <Todos code={"TodosList"} />
        <TodosInput />
      </div>
    </StoreProvider>
  );
}
