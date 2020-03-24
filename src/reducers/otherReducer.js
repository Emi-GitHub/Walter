export const x = (state='', action) => {
    switch(action.type) {
        case 'SET_X': return action.payload;
        default: return state;
    }
}