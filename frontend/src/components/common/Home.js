import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const tasks = []

function Home() {

  const history = useHistory()

  const [newTask, setNewTask] = React.useState('')


  const handleChange = event => {
    const taskToAdd = event.target.value
    setNewTask(taskToAdd)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!newTask) return
    tasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    history.push('/tasks/today')
    setNewTask('')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="form">
          <h1 className="heading">What would you like to accomplish today?</h1>
          <form 
            onSubmit={handleSubmit} 
            className={newTask ? 'active' : null}>
            <input 
              type="text" 
              name="newTask" 
              placeholder="Start typing..." 
              value={newTask} 
              onChange={handleChange} 
            />
            <button type="submit" className={newTask ? 'active' : 'hidden'}>add</button>
          </form>
        </div>
        <Link to="tasks/today">Go to my tasks page</Link>
      </div>
    </section>
  )
}

export default Home