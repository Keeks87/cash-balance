/*
Filename: bank.js

Code: Component that displays balance information for deposit, withdraw, 
interest and charges.
*/

// Import required files
import { createSlice } from "@reduxjs/toolkit"

export const bankSlice = createSlice({
    name: "bank",

    initialState: {
        value: 0
    },

    reducers : {
        // Deposit into the current state
        deposit: (state, dopsitAmount) => {
            state.value += dopsitAmount.payload
        },

        // Withdraw from the current state
        withdraw: (state, withdrawAmount) => {
            state.value -= withdrawAmount.payload
        },

        // Increasing the state(balance) by 5%
        addIntrest: (state) => {
            state.value += (state.value * 0.5) 
        },

        // Decreasing the state(balance) by 15%
        charges: (state) => {
            state.value -= (state.value * 0.15) 
        }
    }
})

// Export the state object 
export const {deposit, withdraw, addIntrest, charges} = bankSlice.actions
export default bankSlice.reducer