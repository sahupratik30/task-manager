import React, { useState } from "react";
import Todo from "../models/todo";

type todoContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const todoContext = React.createContext<todoContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id) => {},
});

export const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (enteredTodo: string) => {
    const newTodo = new Todo(enteredTodo);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  const todoContextValue: todoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <todoContext.Provider value={todoContextValue}>
      {props.children}
    </todoContext.Provider>
  );
};
export default todoContext;
