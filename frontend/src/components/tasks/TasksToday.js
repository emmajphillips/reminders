import React from 'react'

import PageContainer from '../common/PageContainer'

// import { tasks } from '../../lib/tasks'

const JSONtasks = localStorage.getItem('tasks')
const realTasks = JSON.parse(JSONtasks)

function TasksToday () {

  const handleCheck = () => {
    console.log('clicked!')
  }

  return (
    <>
      <h1>Tasks</h1>
      <PageContainer>
        {!realTasks ? 
          <h2> no tasks</h2>
          :
          realTasks.map(task => (
            <div key={task.index} className="task">
              <input type="checkbox" className="checkbox" onClick={handleCheck}/>
              <h2>{task}</h2>
            </div>
          ))}
        <button>Create another</button>
      </PageContainer>
    </>
  )
}

export default TasksToday