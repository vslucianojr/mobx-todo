import React from "react";
import { StoreContext } from "../TodoList";
import { useObserver } from "mobx-react";

export default function TodosHeader() {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <h1 style={{ color: "white" }}>{store.todosNotDone} Todo!</h1>
  ));
}
