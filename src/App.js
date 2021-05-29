import React, { useEffect } from 'react';
import { applicationABI, applicationAddress } from './utils/config';
import fetchIncompleteTodoItems from './utils/fetchInCompleteTodoItems';
import makeConnection from './utils/makeConnection';
import Banner from "./components/Banner"
import Todo from "./components/TodoComponents/Todo"
import fetchCompletedTodoItems from './utils/fetchCompletedTasks'
import './App.css';
import { useDispatch } from 'react-redux';
import { addTask } from './actions/addTask';
import { addAccount, addMethod } from './actions/addConnxParams';
import { addCompletedTask } from './actions/addCompletedTask';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      async function initialSetup(){
      const {web3,account} = await  makeConnection();
      const abi = applicationABI;
      const address = applicationAddress;
      const {methods} = new web3.eth.Contract(abi,address);
      const todoItems = await fetchIncompleteTodoItems(methods);
      const completedTodoItems = await fetchCompletedTodoItems(methods);
      dispatch(addCompletedTask(completedTodoItems));
      dispatch(addTask(todoItems));
      dispatch(addAccount(account));
      dispatch(addMethod(methods));
    }
    initialSetup();
    },[dispatch]);


  return (
    <div className="app">
      <Banner/>
      <Todo/>
    </div>
  );
}

export default App;




//getter for block chain
// let {methods} = new web3.eth.Contract(abi,address);
// async function fetchToDoItems(){
// const taskCount =  await methods.taskCount().call();
// for(let i = 1 ; i <= taskCount ; i++){
//   const task = await methods.tasks(i).call();
//   console.log(task);
//   }
// }
// fetchToDoItems();


// Add something on the block chain
    //   const makeChanges = async () => {
    //     try{
    //       const accounts = await  web3.eth.getAccounts();
    //       const account = accounts[0];
    //       methods.deposit(amount).send({from:account}).then((transaction) => console.log(transaction)).catch((error) => console.log(error));
    //     }catch(error){
    //       console.log(error)
    //     }
    // }
    // makeChanges();