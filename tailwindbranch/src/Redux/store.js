import {configureStore} from '@reduxjs/toolkit'
import { user } from './slices/userSlice'
import hivebizSlice from './slices/hivebizSlice'



export const store = configureStore({
    reducer: {
        user: user.reducer,
        hivebizSlice: hivebizSlice

    },
})