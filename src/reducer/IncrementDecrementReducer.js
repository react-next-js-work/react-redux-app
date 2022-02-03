//actions kaisy perform karny hain wo reducer mn define karin gy
//means business logic of actions will be written here

const initialState = 0
const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export default changeNumber
