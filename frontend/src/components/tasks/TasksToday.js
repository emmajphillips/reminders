import React from 'react'

import PageContainer from '../common/PageContainer'

const JSONtasks = localStorage.getItem('tasks')
const realTasks = JSON.parse(JSONtasks)

function TasksToday () {

  const [tasks, setTasks] = React.useState(realTasks)
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
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    setTasks([...tasks, newTask])
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
        <button type="button" onClick={openNewTaskForm}>Create another</button>
      </PageContainer>
    </>
  )
}

export default TasksToday