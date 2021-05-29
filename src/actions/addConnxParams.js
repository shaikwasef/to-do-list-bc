export const addAccount = (account) => {
    return {
        type : "ADD_ACCOUNT",
        payload : account
    }
}

export const addMethod = (methods) => {
    return {
        type : "ADD_METHODS",
        payload : methods
    }
}