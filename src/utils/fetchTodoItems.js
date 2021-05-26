async function fetchTodoItems(methods){
    let items = [];
    const taskCount =  await methods.taskCount().call();
    for(let i = 1 ; i <= taskCount ; i++){
      const task = await methods.tasks(i).call();
        items = [...items,task];
      }
      return items;
}

export default fetchTodoItems;