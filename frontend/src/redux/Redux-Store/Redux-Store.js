import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../Reducers/User-Reducer'

const rootReducer = () => ({
    usersPage: userReducer
})

export const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

window.store = store

export default store