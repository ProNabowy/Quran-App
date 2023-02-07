const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const getDataFromAPI = createAsyncThunk("song/chapterSlice", async () =>
{
    const response = await fetch("https://raw.githubusercontent.com/ProNabowy/Quran/main/quran.json");
    const data = response.json();
    return data;
});


const chapterReducer = createSlice({
    name: "chapterReducer",
    initialState: [],
    extraReducers: (builder) =>
    {
        builder.addCase(getDataFromAPI.fulfilled, (state, action) =>
        {
            return action.payload;
        });
    }
});


export default chapterReducer.reducer;