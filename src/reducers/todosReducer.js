const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    task: action.text,
                    isDone: false
                }
            ]
        default:
            return state;
    }
}

export default todos;