export const addCompletedTask = (task) => { 
    return {
        type : "ADD_COMPLETED_TASK",
        payload : task
    }
}