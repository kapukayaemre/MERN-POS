import cartSlice from "./cartSlice";
const {configureStore} = require("@reduxjs/toolkit");

export default configureStore({
    reducer: {
        cart: cartSlice
    }
})