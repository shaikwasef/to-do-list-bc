export const deleteTodoItems = async (index,account,methods) => {
    let transaction = await methods.toggleCompleted(index).send({from:account});
    return transaction;
}


