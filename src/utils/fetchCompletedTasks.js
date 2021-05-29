async function fetchCompletedTodoItems(methods){
    let items = [];
    const taskCount =  await methods.taskCount().call();
    for(let i = 1 ; i <= taskCount ; i++){
      const task = await methods.tasks(i).call();
      if(task.completed){
        items = [...items,task];
      }
      }
      return items;
}

export default fetchCompletedTodoItems;