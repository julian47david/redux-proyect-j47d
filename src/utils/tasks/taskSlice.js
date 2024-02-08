import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../localStorage";

const initialState = getItem('tasks') || [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload
      const foundTask = state.find( task => task.id === id)
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }

    }
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer;
