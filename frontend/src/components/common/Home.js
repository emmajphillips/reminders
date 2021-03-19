import React from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const homePageTasks = [];
  const defaultTask = { completed: false };

  const [newTask, setNewTask] = React.useState({});

  const handleChange = (event) => {
    const taskToAdd = { ...defaultTask, name: event.target.value };
    setNewTask(taskToAdd);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.name === undefined) return;
    homePageTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(homePageTasks));
    setNewTask({});
    history.push("/tasks/today");
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="form">
          <h1 className="heading">What would you like to accomplish today?</h1>
          <form
            onSubmit={handleSubmit}
            className={newTask.name === undefined ? "active" : null}
          >
            <input
              type="text"
              name="newTask"
              placeholder="Start typing..."
              value={newTask.name}
              onChange={handleChange}
            />
            <button
              type="submit"
              className={newTask.name === undefined ? "active" : "hidden"}
            >
              add
            </button>
          </form>
        </div>
        <Link to="tasks/today">Go to my tasks page</Link>
      </div>
    </section>
  );
}

export default Home;
