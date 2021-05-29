import React , {useState} from 'react';
import {KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import {addTask} from "../../actions/addTask"
import "./Timer.css"
import { useDispatch, useSelector } from 'react-redux';
import {dateToTime} from '../../utils/timeCalculations'
import { addTodoItems } from '../../utils/addTodoItems';
import fetchIncompleteTodoItems from '../../utils/fetchInCompleteTodoItems'

function Timer({task}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const account = useSelector(state => state.accountReducer);
    const methods = useSelector(state => state.methodsReducer);
    const dispatch = useDispatch();

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleTask = async() => {
        const time = dateToTime(selectedDate);
        const taskTobeAdded = task + "::"+ time;;
        await addTodoItems(methods,account,taskTobeAdded);
        const todoItems = await fetchIncompleteTodoItems(methods);
        dispatch(addTask(todoItems));
    }

    return (
        <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                className = "time-picker"
                margin="normal"
                value={selectedDate}
                onChange={(e) =>handleDateChange(e)}
                />
            </MuiPickersUtilsProvider>
            <IconButton aria-label="delete" onClick = {handleTask}>
                <AddBoxIcon fontSize="large" className="add-box" color = "secondary"/>
            </IconButton>
        </div>
    );
}

export default Timer;