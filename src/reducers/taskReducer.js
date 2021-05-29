export const taskReducer = (state = [] ,action ) => {
    switch(action.type){
        case "UPDATE_TASK":
            return action.payload;
        default :
            return state;
    }
}

