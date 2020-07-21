import React from 'react'

import PageContainer from '../common/PageContainer'
import { homePageTasks } from '../common/Home'

const JSONtasks = localStorage.getItem('tasks')
const realTasks = JSON.parse(JSONtasks)

function TasksToday () {

  const [tasks, setTasks] = React.useState(realTasks ? realTasks : homePageTasks)
  const [addTask, setAddTask] = React.useState(false)
  const [newTask, setNewTask] = React.useState('')


  const handleCheck = () => {
    console.log('clicked!')
  }

  const openNewTaskForm = () => {
    setAddTask(true)
  }

  const handleChange = event => {
    const taskToAdd = event.target.value
    setNewTask(taskToAdd)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!newTask) return
    setTasks([...tasks, newTask])
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    setNewTask('')
    setAddTask(false)
  }

  return (
    <>
<<<<<<< HEAD
      <div className="header">
        <h1>Tasks</h1>
        <p>Today</p>
      </div>
=======
      <h1>Tasks</h1>
>>>>>>> 655e4c3... Bump websocket-extensions from 0.1.3 to 0.1.4 in /frontend
      <PageContainer>
        {tasks.length === 0 ? 
          <h2> no tasks</h2>
          :
          tasks.map((task, index) => (
            <div key={index} className="task">
              <input type="checkbox" className="checkbox" onClick={handleCheck}/>
              <h2>{task}</h2>
            </div>
          ))}
        {addTask ? <div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={newTask}
              onChange={handleChange} 
            />
          </form>
        </div> 
          : 
<<<<<<< HEAD
          null}
        <button type="button" onClick={openNewTaskForm} className="pink-button">{tasks.length === 0 ? 'add task' : 'create another'}</button>
=======
          <div></div>}
        <button type="button" onClick={openNewTaskForm}>{tasks.length === 0 ? 'Add task' : 'create another'}</button>
>>>>>>> 655e4c3... Bump websocket-extensions from 0.1.3 to 0.1.4 in /frontend
      </PageContainer>
    </>
  )
}

export default TasksToday