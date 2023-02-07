import { configureStore } from "@reduxjs/toolkit";
import activeChapter from "../Slices/active-chapter";
import chapterSlice from "../Slices/chapterSlice";
import currentReader from "../Slices/currentReader";

const store = configureStore({
    reducer: {
        chapters: chapterSlice,
        currentChapter: activeChapter,
        currentReader: currentReader
    }
});

export default store;