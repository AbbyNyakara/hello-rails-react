import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from './components/greetings'

export const store = configureStore({
  reducer: {
    greetings: greetingReducer
  }
})