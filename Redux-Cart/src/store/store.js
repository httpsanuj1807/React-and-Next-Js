import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from './uiSlice';
import cartSliceReducer from './cartSlice.js';

const store = configureStore({

    reducer : {
        ui : uiSliceReducer,
        cart : cartSliceReducer
    }

});


export default store;