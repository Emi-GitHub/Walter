export const deleteEmployee = (employees, x) => {
    return {
        type: 'DELETE_EMPLOYEE',
        payload: employees.filter ((employee, i) => { return i!==x })
    }
}
export const setContent = value => {
    return {
        type: 'SET_CONTENT',
        payload: value
    }
}
export const addEmployees = (employees, content) => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: [...employees, content]
    }
}
export const refreshContent = () => {
    return {
        type: 'REFRESH_CONTENT',
        payload: ''
    }
}
export const setEditMode = value => {
    return {
        type: 'SET_EDIT_MODE',
        payload: !value
    }
}
export const updateComponentValue = (employees, value, x) => {
    return {
        type: 'UPDATE_COMPONENT_VALUE',
        payload: employees.map((el, i) => i === x ? value : el)
    }
}
export const setSearch = value => {
    return {
        type: 'SET_SEARCH',
        payload: value
    }
}
export const addDailysName = (dailys, name) => {
    return {
        type: 'ADD_DAILYS_NAME',
        payload: {...dailys, name: name}
    }
}
export const addDailysTime = (dailys, time) => {
    return {
        type: 'ADD_DAILYS_TIME',
        payload: {...dailys, time: time}
    }
}
export const setName = name => {
    return {
        type: 'SET_NAME',
        payload: name
    }
}
export const setTime = time => {
    return {
        type: 'SET_TIME',
        payload: time
    }
}
export const setDailySearch = value => {
    return {
        type: 'SET_DAILY_SEARCH',
        payload: value
    }
}