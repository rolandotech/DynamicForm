import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserForm {
    value: any
  }
  
  const initialState: UserForm = {
    value: []
  };


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      getUserData: (state, action) => {
        console.log(action.payload)
        state.value.push(action.payload)
      },
      updateUserData: (state, action) => {
        
      }
    },
  });

export const {getUserData, updateUserData} = userSlice.actions
export default userSlice.reducer