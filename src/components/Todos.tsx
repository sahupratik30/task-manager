import React, { useContext } from "react";
import todoContext from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC = () => {
  const todoCtx = useContext(todoContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoName={item.todoName}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
