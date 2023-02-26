import { createSlice } from "@reduxjs/toolkit";



const logincookie = localStorage.setItem('logincookie', false)


const initialState = {
    loggedin: localStorage.getItem('logincookie'),
    userInfo: null
    
}

export const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state) => {
            localStorage.setItem('logincookie', true)
            console.log(state.userInfo)
        }
    }
})

export const {login} = user.actions