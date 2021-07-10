import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tasks from './Tasks.js'
import { useState, useEffect } from 'react'
import AddTask from './AddTask'
import About from './About'
import Footer from './Footer'



function ToDoApp() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('https://jiachaowu.site/tasks')
    const data = await res.json()    
    return data
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('https://jiachaowu.site/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  //Delete Task
  const deleteTask = async (id) => {

  
    await fetch(`https://jiachaowu.site/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task._id !== id))
  }

  //fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`https://jiachaowu.site/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, taskReminder: !taskToToggle.taskReminder }
    const res = await fetch(`https://jiachaowu.site/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })
    const data = await res.json()

    setTasks(tasks.map((task) =>
      task._id === id ? {
        ...task, taskReminder:
          data.taskReminder
      } : task
    )
    )
  }

  return (
    <Router>
      
      <div className="container border-2">
        <Header onAdd={() => setshowAddTask(!showAddTask)}
          showAdd={showAddTask} />
        <Route
          path='/todolist'
          exact render={(props) => (
            <div className='center'>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </div>

          )}
        />
        <Route path='/aboutToDo' component={About} />
        <Footer />       
      </div>
    </Router>
  );
}



export default ToDoApp;
