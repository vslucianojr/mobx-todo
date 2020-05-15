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
    toggle() {
      store.done = !store.done;
    },
    get todosCount() {
      return store.todos.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const Todos = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.todos.map((todo) => (
        <li style={{ color: "white" }} key={todo}>
          {todo.name}
        </li>
      ))}
    </ul>
  ));
};

export default function TodoList() {
  return (
    <StoreProvider>
      <div>
        <TodosHeader />
        <Todos />
        <TodosInput />
      </div>
    </StoreProvider>
  );
}
