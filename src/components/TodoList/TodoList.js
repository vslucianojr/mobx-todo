import React from "react";
import TodosInput from "../Todoselements/TodosInput";
import TodosHeader from "../Todoselements/TodosHeader";
import TodoItem from "../Todoselements/TodoItem";
import StoreProvider from "./TodosStore";

export default function TodoList() {
  return (
    <StoreProvider>
      <TodosHeader />
      <TodoItem />
      <TodosInput />
    </StoreProvider>
  );
}
