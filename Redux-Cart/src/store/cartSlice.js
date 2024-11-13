import { createSlice } from "@reduxjs/toolkit";

const cartInitialState  = {
    items : [],
    totalQuantity : 0,
}

const cartSlice = createSlice({

    name : 'cart',
    initialState : cartInitialState,
    reducers : {
        addToCart(state, action){
            const newItem = action.payload;
            const existingProduct = state.items.find((item) => item.itemId === newItem.id);
            if(!existingProduct){
                state.items.push({
                    itemId : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.title
                });
            }
            else{
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.totalPrice + existingProduct.price;
            }
            state.totalQuantity++;
        },
        removeFromCart(state, action){
            const removeId = action.payload;
            const existingProduct = state.items.find((item) => item.itemId === removeId);
            if(existingProduct.quantity > 1){
                existingProduct.quantity--;
                existingProduct.totalPrice = existingProduct.totalPrice - existingProduct.price
            }
            else{
                state.items = state.items.filter((item) => item.itemId !== removeId);
            }
            state.totalQuantity--;
        },
    }

})


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
