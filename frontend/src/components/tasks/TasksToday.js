import React from 'react'

import PageContainer from '../common/PageContainer'
import { homePageTasks } from '../common/Home'

const JSONtasks = localStorage.getItem('tasks')
const realTasks = JSON.parse(JSONtasks)

console.log(homePageTasks)
console.log(realTasks)

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
      <h1>Tasks</h1>
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
          <div></div>}
        <button type="button" onClick={openNewTaskForm}>{tasks.length === 0 ? 'Add task' : 'create another'}</button>
      </PageContainer>
    </>
  )
}

export default TasksToday