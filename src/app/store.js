import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../utils/tasks/taskSlice';

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }

})