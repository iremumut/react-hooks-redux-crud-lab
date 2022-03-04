import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: []
  },
  reducers: {
    restaurantAdded(state,action){
      state.entities.push({
        name: action.payload,
        id: uuid()
      });
    },
    restaurantRemoved(state,action){
      const index = state.entities.findIndex((res) => res.id === action.payload);
      state.entities.splice(index,1);
    }
  },
});

export default restaurantsSlice.reducer;

export const {restaurantRemoved, restaurantAdded} = restaurantsSlice.actions;