export const employees = (state=['John Doe', 'Chloe Doe', 'John Smith'], action) => {
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
export const dailys = (state=[{name: "John Doe", time:"8:00", onTime:"DA"},{name: "Chloe Doe", time:"9:00", onTime:"NE"}, {name: "John Smith", time:"8:30", onTime:"DA"}], action) => {
    switch(action.type) {
        case 'ADD_DAILYS': return action.payload;
        case 'DELETE_DAILYS': return action.payload;
        case 'UPDATE_DAILY_COMPONENT_VALUE': return action.payload;
        default: return state;
    }
}
export const name = (state='', action) => {
    switch(action.type) {
        case 'SET_NAME': return action.payload;
        case 'REFRESH_NAME': return action.payload;
        default: return state;
    }
}
export const time = (state='', action) => {
    switch(action.type) {
        case 'SET_TIME': return action.payload;
        case 'REFRESH_TIME': return action.payload;
        default: return state;
    }
}
export const onTime = (state='DA', action) => {
    switch(action.type) {
        case 'SET_ON_TIME': return action.payload;
        default: return state;
    }
}
export const dailySearch = (state='', action) => {
    switch(action.type) {
        case 'SET_DAILY_SEARCH': return action.payload;
        default: return state;
    }
}
export const mess = (state=true, action) => {
    switch(action.type) {
        case 'SET_MESS': return action.payload;
        default: return state;
    }
}
export const editDailyMode = (state=false, action) => {
    switch(action.type) {
        case 'SET_EDIT_DAILY_MODE': return action.payload;
        default: return state;
    }
}
export const timeMess = (state=false, action) => {
    switch(action.type) {
        case 'SET_TIME_MESS': return action.payload;
        default: return state;
    }
}
export const mode = (state=false, action) => {
    switch(action.type) {
        case 'SET_MODE': return action.payload;
        default: return state;
    }
}
export const dailyMode = (state=false, action) => {
    switch(action.type) {
        case 'SET_DAILY_MODE': return action.payload;
        default: return state;
    }
}