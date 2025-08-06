import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (task) => ({
        payload: { id: nanoid(), ...task },
      }),
    },
    deleteTask: (state, action) => state.filter(task => task.id !== action.payload),
    editTask: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    }
  }
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
