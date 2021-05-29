import React,{useState}  from 'react';
import TextField from '@material-ui/core/TextField';
import Timer from "./Timer.js"
import "./TodoAddBar.css"

function TodoAddBar() {
  const [task,setTask] = useState("");

  const handleChange = (e) =>  {
    setTask(e.target.value);
  }

  return (
      <div className = "add-to-do-container">
      <TextField
        className = "add-task-bar"
        label="Add todo task"
        variant="outlined"
        color="secondary"
        value = {task}
        onChange = {handleChange}
      />
      <Timer task={task} />
    </div>
  ); 
}


export default TodoAddBar;