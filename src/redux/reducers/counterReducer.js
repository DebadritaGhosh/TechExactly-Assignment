import {createSlice} from '@reduxjs/toolkit';

//Declaring Initial State
const initialState = {
  count : 0
};

//Craeting Slice
const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCounter(state, action) {
      state.count =  state.count + 1
    },
    decreaseCounter(state, action) {
        state.count =  state.count - 1
    },
}
});

export const {
    increaseCounter,
    decreaseCounter
} = counterReducer.actions; // exporting actions

export default counterReducer.reducer; // exporting reducer