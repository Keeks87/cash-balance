/*
Filename: store.js

Code: This file contains functions that are used to store the state of the 
store object
*/

// Import required files
import { configureStore } from "@reduxjs/toolkit"
import bankReducer from "./bank"

// Export store functions
export default configureStore({
    reducer: {
        bank: bankReducer,
    },
})
