import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ onRemoveTodo: () => void; todoName: string }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todoName}
    </li>
  );
};

export default TodoItem;
