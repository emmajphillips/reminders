import React, { useEffect } from "react";
import axios from "axios";

import PageContainer from "../common/PageContainer";

function TasksToday() {
  const [tasks, setTasks] = React.useState([]);
  const [addTask, setAddTask] = React.useState(false);
  const [newTask, setNewTask] = React.useState(null);

  const JSONtasks = localStorage.getItem("tasks");
  const realTasks = JSON.parse(JSONtasks);

  const getTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      const combinedTasks = realTasks
        ? [...realTasks, ...res.data]
        : [...res.data];
      setTasks(combinedTasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, [realTasks]);

  const handleCheck = () => {
    console.log("clicked!");
  };

  const openNewTaskForm = () => {
    setAddTask(true);
  };

  const handleChange = (event) => {
    const taskToAdd = { completed: false, name: event.target.value };
    setNewTask(taskToAdd);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask === null) return;
    tasks.push(newTask);
    setTasks(tasks);
    localStorage.setItem(
      "tasks",
      JSON.stringify(realTasks ? [...realTasks, newTask] : [newTask])
    );
    setNewTask(null);
    setAddTask(false);
  };

  return (
    <>
      <div className="header">
        <h1>Tasks</h1>
        <p>Today</p>
      </div>
      <PageContainer>
        {tasks.length === 0 ? (
          <h2> no tasks</h2>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="task">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleCheck}
              />
              <h2>{task.name}</h2>
            </div>
          ))
        )}
        {addTask ? (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newTask === null ? "" : newTask.name}
                onChange={handleChange}
              />
            </form>
          </div>
        ) : null}
        <button type="button" onClick={openNewTaskForm} className="pink-button">
          {tasks.length === 0 ? "add task" : "create another"}
        </button>
      </PageContainer>
    </>
  );
}

export default TasksToday;
