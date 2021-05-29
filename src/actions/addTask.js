export const addTask = (task) => {
    return {
        type : "UPDATE_TASK",
        payload : task
    }
}