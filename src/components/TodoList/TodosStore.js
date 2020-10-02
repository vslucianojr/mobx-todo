import React from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = React.createContext();

export default function StoreProvider({ children }) {
  const store = useLocalStore(() => ({
    todos: [],
    addTodo: (todo) => {
      store.todos.push(todo);
    },
    toggle(todo) {
      todo.done = !todo.done;
    },
    delete(todo) {
      this.todos = this.todos.filter((elem) => elem.name !== todo.name);
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
}
