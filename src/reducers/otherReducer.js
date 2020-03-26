export const employees = (state=['Amina Mehic', 'Emina Mehic', 'Faris Mehic', 'Anesto Nesto'], action) => {
    switch(action.type) {
        case 'ADD_EMPLOYEE': return action.payload;
        case 'DELETE_EMPLOYEE': return action.payload;
        case 'UPDATE_COMPONENT_VALUE': return action.payload;
        default: return state;
    }
}
export const content = (state='', action) => {
    switch(action.type) {
        case 'SET_CONTENT': return action.payload;
        case 'REFRESH_CONTENT': return action.payload;
        default: return state;
    }
}
export const editMode = (state=false, action) => {
    switch(action.type) {
        case 'SET_EDIT_MODE': return action.payload;
        case 'UPDATE_EDIT_MODE': return action.payload;
        default: return state;
    }
}
export const search = (state='', action) => {
    switch(action.type) {
        case 'SET_SEARCH': return action.payload;
        default: return state;
    }
}
export const dailys = (state=[{name: "Emina", time:"8:00", onTime:"DA"},{name: "amina", time:"9:00", onTime:"DA"}], action) => {
    switch(action.type) {
        case 'ADD_DAILYS_NAME': return action.payload;
        case 'ADD_DAILYS_TIME': return action.payload;
        default: return state;
    }
}
export const name = (state='', action) => {
    switch(action.type) {
        case 'SET_NAME': return action.payload;
        default: return state;
    }
}
export const time = (state='', action) => {
    switch(action.type) {
        case 'SET_TIME': return action.payload;
        default: return state;
    }
}
export const dailySearch = (state='', action) => {
    switch(action.type) {
        case 'SET_DAILY_SEARCH': return action.payload;
        default: return state;
    }
}