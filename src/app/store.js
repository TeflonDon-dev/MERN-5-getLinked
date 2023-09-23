import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "../features/modalSlice";

 const store = configureStore({
    reducer: {
        modal:modalSliceReducer
    }
 })

 export default store