import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, removeTask, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;