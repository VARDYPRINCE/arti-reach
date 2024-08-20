import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
    },
    reducers: {
        setUserName: (state, action) => {
             state.email  = action.payload
        },
    },
});

export const { setUserName } = userSlice.actions;