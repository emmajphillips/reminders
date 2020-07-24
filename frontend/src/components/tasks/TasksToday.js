import React from 'react'

import PageContainer from '../common/PageContainer'

import { tasks } from '../../lib/tasks'

function TasksToday () {
  return (
    <>
      <h1>Tasks</h1>
      <PageContainer>
        {tasks.map(task => (
          <div key={task.id}>
            <h2>{task.name}</h2>
          </div>
        ))}
      </PageContainer>
    </>
  )
}

export default TasksToday