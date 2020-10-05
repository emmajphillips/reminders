import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import TasksToday from './components/tasks/TasksToday'
import TasksWeek from './components/tasks/TasksWeek'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasks/today" component={TasksToday} />
        <Route path="/tasks/week" component={TasksWeek} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
