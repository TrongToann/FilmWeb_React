import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./features/firmSlice";
const store = configureStore({
    reducer: {
        film : filmSlice.reducer,
    },
}) ; 

export default store ; 