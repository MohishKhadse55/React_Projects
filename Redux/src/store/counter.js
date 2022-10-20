import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// const store = createStore(counterSlice.reducer);

// if we had the more than one slice then we can add them in the map ie key and value form and behind the scene this react toolkit
// will combine all the reducers in a one big reducer
// const store = configureStore({
//   reducer: { counter: counterSlice.reducer },
// });
