import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./CompletedTasks.css"
import { useSelector } from 'react-redux';



export default function CompletedTasks() {
    const tasks = useSelector(state => state.completeTaskReducer);
   const content = tasks.map((task,index) => {
    const array = task.content.split("::");
    return(
    <TableRow key={index}>
        <TableCell align="center" component="th" scope="row">
            {array[0]}
        </TableCell>
    </TableRow>
    )
   })

  return (
    <TableContainer className= "completed-tasks"   component={Paper}>
        {tasks  &&
      <Table aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell align="center">COMPLETED TASKS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {content}
        </TableBody>
      </Table>
    }
    </TableContainer>

  );
}
