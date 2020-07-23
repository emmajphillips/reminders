import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="hero">
      <h1 className="heading">What would you like to accomplish today?</h1>
      <form>
        <input type="text" placeholder="" value=""/>
        <button type="submit">Add</button>
      </form>
      <Link to="tasks/today">Go to my tasks page</Link>
    </section>
  )
}

export default Home