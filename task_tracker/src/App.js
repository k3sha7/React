import Header from './component/Header'
import React, { useState } from 'react'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'


function App() {
  const [showForm, setShowForm] = useState(true)
  const [tasks, setTasks] = useState([{id:1,text:'gasgasf',remainder:true}])
  
  const deleteTask = id => {
    console.log(id)
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  const toggleReminder = id => {
    console.log(id)
    setTasks(tasks.map(task => task.id === id ? {...task, remainder: !task.remainder} : task))
  }
  const addTask = task => {
    const id = Math.floor(Math.random()*1000)
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      {showForm && <AddTask onAdd={addTask}/>}
      <Header onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task'}
    </div>
  );
}

export default App;
