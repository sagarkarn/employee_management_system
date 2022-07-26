import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: "view",
    initialState: { navActive: "dashboard", title: "Dashboard" },
    reducers: {
        activeNav(state, action) {
            state.navActive = action.payload;
        },
        setTitle(state, action) {
            state.title = action.payload;
        },
    },
});

export const viewActions = viewSlice.actions;
export default viewSlice;
