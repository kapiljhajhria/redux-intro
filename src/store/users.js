import { createSlice } from "@reduxjs/toolkit";

//creating slice - combining action and reducor using redux-toolkit
let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    //actions=>action handlers
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
