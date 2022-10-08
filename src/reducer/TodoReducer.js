const intialData = {
    list: []
}

const todoReducer = (state = intialData, action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }

                ]
            }
        default: return state;
    }

}

export default todoReducer

