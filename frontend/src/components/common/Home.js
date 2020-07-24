import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Home() {

  const history = useHistory()

  const [searchQuery, setSearchQuery] = React.useState('')


  const handleChange = event => {
    const updatedQuery = event.target.value
    setSearchQuery(updatedQuery)
  }

  const handleSubmit = event => {
    if (!searchQuery) return
    event.preventDefault()
    history.push('/tasks/today')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="form">
          <h1 className="heading">What would you like to accomplish today?</h1>
          <form onSubmit={handleSubmit} className={searchQuery ? 'active' : null}>
            <input type="text" name="newTask" placeholder="" value={searchQuery} onChange={handleChange} />
            <button type="submit" className={searchQuery ? 'active' : null}>add</button>
          </form>
        </div>
        <Link to="tasks/today">Go to my tasks page</Link>
      </div>
    </section>
  )
}

export default Home