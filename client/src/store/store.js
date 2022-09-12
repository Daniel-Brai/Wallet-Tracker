import { configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from '../store/reducer'

export const store = configureStore({ 
    reducer: { 
        expense: expenseSlice
    }
})