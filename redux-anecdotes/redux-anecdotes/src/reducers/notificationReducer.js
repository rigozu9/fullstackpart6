import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            state = action.payload
            return state
        },
    }
})

export const { setNotification } = notificationSlice.actions

export const createNotification  = ( noti, timer ) => {
    return async dispatch => {
        dispatch(setNotification(noti))
        setTimeout(() => dispatch(setNotification(null)), timer * 1000)
    }
}

export default notificationSlice.reducer