import React from 'react'
import { useState } from 'react'
function ToDo() {
  const[task,setTask] = useState(" ")
  const[allTask,setAllTask] = useState([]);
  const addTask = () => {
    if(task.trim() !== ""){
        setAllTask((prev) => [...prev, task])
        setTask("")
    }
   
  }
  return (
    <div>
        <h3>ToDo List</h3>

        <input type="text" value = {task}
            onChange = {(e) => setTask(e.target.value)}
            placeholder='Enter Task Name'
        />
        <button onClick = {addTask}>Add Task</button>

        <ul>
            {allTask.map((item,index) => (
                <li key = {index}>
                    {item}
                </li>
            )
            )}
        </ul>

    </div>
  )
}

export default ToDo