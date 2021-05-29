import React  from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./CompleteTasks.css"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import fetchIncompleteTodoItems from "../../utils/fetchInCompleteTodoItems"
import {addTask} from "../../actions/addTask"
import {deleteTodoItems} from "../../utils/deleteTodoItems"
import fetchCompletedTodoItems from '../../utils/fetchCompletedTasks';
import { addCompletedTask } from '../../actions/addCompletedTask';


export default function CompleteTasks() {
    const tasks = useSelector(state => state.taskReducer);
    const methods = useSelector(state => state.methodsReducer);
    const account = useSelector(state => state.accountReducer);
    const dispatch = useDispatch();
   

    const handleClick = async (e) => {
        const rowElement = Number.parseInt(e.target.parentNode.parentNode.parentNode.firstChild.textContent);
        const index = rowElement;
        await deleteTodoItems(index,account,methods);
        const todoItems = await fetchIncompleteTodoItems(methods);
        const completedTodoItems = await fetchCompletedTodoItems(methods);
        dispatch(addTask(todoItems));
        dispatch(addCompletedTask(completedTodoItems));
    }


   const content = tasks.map((task,index) => {
    
    const array = task.split("::");
    return(
    <TableRow key={index}>
        <TableCell component="th" scope="row">
            {array[0]}
        </TableCell>
        <TableCell component="th" scope="row">
            {array[1]}
        </TableCell>
        <TableCell align="right">{array[2] && array[2]}</TableCell>
        <TableCell>
        <Button variant="contained" color="secondary">
            COMPLETED
        </Button>
        </TableCell>
    </TableRow>
    )
   })

  return (
    <TableContainer className = "incomplete-tasks" component={Paper}>
        {tasks &&
      <Table className= "completed-tasks" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">TASKS</TableCell>
            <TableCell align="center">TIME</TableCell>
            <TableCell align="center">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody onClick = {(e) => handleClick(e)} >
          {content}
        </TableBody>
      </Table>
    }
    </TableContainer>

  );
}
