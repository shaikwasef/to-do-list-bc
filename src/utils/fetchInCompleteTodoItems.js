async function fetchIncompleteTodoItems(methods){
    let items = [];
    const taskCount =  await methods.taskCount().call();
    for(let i = 1 ; i <= taskCount ; i++){
      const task = await methods.tasks(i).call();
      if(!task.completed){
        const taskConstructor = task.id + '::' + task.content ;
        items = [...items,taskConstructor];
      }
      }
      return items;
}

export default fetchIncompleteTodoItems;