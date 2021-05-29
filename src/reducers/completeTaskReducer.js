export const completeTaskReducer = (state = [] ,action ) => {
    switch(action.type){
        case "ADD_COMPLETED_TASK":
            return [...action.payload];
        default :
            return state;
    }
}

