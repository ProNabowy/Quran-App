import { createSlice } from "@reduxjs/toolkit";

export const currentReader = createSlice({
    initialState: 0,
    name: "currentReader",
    reducers: {
        getCurrentReader: (state, action) =>
        {
            return action.payload;
        }
    }
});


export default currentReader.reducer;
export const { getCurrentReader} = currentReader.actions;