import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import TasksToday from './components/tasks/TasksToday'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasks/today" component={TasksToday} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
