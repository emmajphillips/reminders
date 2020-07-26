import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const tasks = []

function Home() {

  const history = useHistory()

  const [searchQuery, setSearchQuery] = React.useState('')


  const handleChange = event => {
    const updatedQuery = event.target.value
    setSearchQuery(updatedQuery)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!searchQuery) return
    tasks.push(searchQuery)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(searchQuery, 'added to', tasks)
    history.push('/tasks/today')
    setSearchQuery('')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="form">
          <h1 className="heading">What would you like to accomplish today?</h1>
          <form onSubmit={handleSubmit} className={searchQuery ? 'active' : null}>
            <input type="text" name="newTask" placeholder="Start typing..." value={searchQuery} onChange={handleChange} />
            <button type="submit" className={searchQuery ? 'active' : 'hidden'}>add</button>
          </form>
        </div>
        <Link to="tasks/today">Go to my tasks page</Link>
      </div>
    </section>
  )
}

export default Home