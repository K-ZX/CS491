import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(['Go out', 'Go home', 'Go to bed', 'Do hw', 'Prepare exam'])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()])
      setNewTask('')
    }
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="app">
      <h1>React Project</h1>
      <h2>ToDoList</h2>
      
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter a task" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>+</button>
      </div>
      
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task}</span>
            <button 
              className="delete-btn" 
              onClick={() => deleteTask(index)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
