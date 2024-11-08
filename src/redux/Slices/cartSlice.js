import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.product.id !== action.payload);
        }
    }
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;