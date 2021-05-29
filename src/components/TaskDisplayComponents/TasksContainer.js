import React from 'react';
import CompleteTasks from './CompleteTasks';
import CompletedTasks from './CompletedTasks'
import "./TasksContainer.css"

function TasksContainer(props) {
    return (
        <div className="tasks-container">
            <CompleteTasks/>
            <CompletedTasks/>
        </div>
    );
}

export default TasksContainer;