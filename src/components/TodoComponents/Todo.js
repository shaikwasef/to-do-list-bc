import React from 'react';
import TodoAddBar from './TodoAddBar';
import TasksContainer from "../TaskDisplayComponents/TasksContainer"
import "./Todo.css"

function Todo(props) {
    return (
        <div className = "todo">
            <TodoAddBar/>
            <TasksContainer/>
        </div>
    );
}

export default Todo;