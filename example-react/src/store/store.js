import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';

export const store = configureStore({
    reducer: combineReducers({
        auth: authSlice,
    })
})