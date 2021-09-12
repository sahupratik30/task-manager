import React, { useContext, useRef } from "react";
import todoContext from "../store/todo-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const todoCtx = useContext(todoContext);
  const todoRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo.trim().length === 0) {
      // throw an error (optional)
      return;
    }
    todoCtx.addTodo(enteredTodo);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
