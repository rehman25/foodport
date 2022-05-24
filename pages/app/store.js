import { configureStore } from "@reduxjs/toolkit";
 import userReducer from "../features/UserSlice"
 import ResReducer from "../features/ResSlice"
 import BasketReducer from "../features/BasketSlice"
const configureStore({
    reducer:{
         resturant:ResReducer,
        user:userReducer,
         basket:BasketReducer
    },
});
export default configureStore;