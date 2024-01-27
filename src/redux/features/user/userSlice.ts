import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    user:{
        loggedIn:false,
        user:null
    }
}

export const userSlice = createSlice({
    name:"user",
    initialState,  // same as above
    reducers :{}

})