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
export const addDailys = (dailys, name, time, onTime) => {
    return {
        type: 'ADD_DAILYS',
        payload: [...dailys, {name:name, time:time, onTime:onTime}]
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
export const refreshName = () => {
    return {
        type: 'REFRESH_NAME',
        payload: ''
    }
}
export const refreshTime = () => {
    return {
        type: 'REFRESH_TIME',
        payload: ''
    }
}
export const setDailySearch = value => {
    return {
        type: 'SET_DAILY_SEARCH',
        payload: value
    }
}
export const setOnTime = value => {
    return {
        type: 'SET_ON_TIME',
        payload: value
    }
}
export const setMess = value => {
    return {
        type: 'SET_MESS',
        payload: value
    }
}
export const deleteUser = (dailys, x) => {
    return {
        type: 'DELETE_DAILYS',
        payload: dailys.filter ((el, i) => { return i!==x })
    }
}
export const setEditDailyMode = value => {
    return {
        type: 'SET_EDIT_DAILY_MODE',
        payload: !value
    }
}
export const updateDailyComponentValue = (dailys, x, name, time, onTime) => {
    return {
        type: 'UPDATE_DAILY_COMPONENT_VALUE',
        payload: dailys.map((el, i) => i === x ? {...el, name: name, time: time, onTime: onTime}: el)
    }
}