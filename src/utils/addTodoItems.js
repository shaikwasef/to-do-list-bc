export const addTodoItems = async (methods,account,task) => {
    let transaction = await methods.createTask(task).send({from:account});
    return transaction;
}


