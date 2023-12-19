import React from "react";

const TodoItem = ({ task, removeTask, toggleTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;