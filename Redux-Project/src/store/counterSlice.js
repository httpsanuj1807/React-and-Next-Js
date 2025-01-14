import { createSlice } from '@reduxjs/toolkit';


const initialCounterState = { counter:0, showCounter : true };

const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCounterState,
    reducers : {
        INCREMENT(state) {
            state.counter++;
        },
        DECREMENT(state) {
            state.counter--;
        },
        INCREMENTBY5(state, action) {
            state.counter = state.counter + action.payload;
        },
        TOGGLE_COUNTER(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;