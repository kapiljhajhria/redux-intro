import { createSlice } from "@reduxjs/toolkit";

//creating slice - combining action and reducor using redux-toolkit
let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    //actions=>action handlers
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
