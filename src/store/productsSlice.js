import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: {}
};

const productsSlice = createSlice({
    name: 'productsData',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data = action.payload;
        }
    }
});


export const { addData } = productsSlice.actions;

export default productsSlice.reducer;