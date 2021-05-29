export const accountReducer = (state = "" ,action ) => {
    
    switch(action.type){
        case "ADD_ACCOUNT":
            return action.payload;
        default :
            return state;
    }
}

export const methodsReducer = (state = null , action) => {
    switch(action.type){
        case "ADD_METHODS":
            return action.payload;
        default :
            return state;
    }
}