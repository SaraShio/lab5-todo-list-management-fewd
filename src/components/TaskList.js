import { useState } from "react";

import Task from "./Task";
import Form from "./Form";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];

    setTasks(updatedTasks);
  }

  function removeTask(taskRemove) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== taskRemove.id;
    });

    setTasks(updatedTasks);
  }

  function toggleCompleted(taskRemove) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskRemove.id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
      <Form addTask={addTask} />
    </div>
  );
}
