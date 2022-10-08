export const addTodo = (data) => {
    return {
        type: "ADD_TO_DO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}



export const removeTodo = (data) => {
    return {
        type: "REMOVE_TO_DO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}





