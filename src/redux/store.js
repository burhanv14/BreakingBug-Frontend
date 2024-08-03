import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'

const store = configureStore({
    //BUG FIXXXX
    reducer: {
        user: userReducer,
    }
});

export default store;
