import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: [],
    },
    reducers: {
        reviewAdded(state,action){
            state.entities.push({
                comment: action.payload.comment,
                restaurantId: action.payload.restaurantId,
                id: uuid()
            });
        },
        reviewRemoved(state,action){
            const index = state.entities.findIndex((review) => review.id === action.payload);
            state.entities.splice(index,1);
        }
    }
})

export default reviewsSlice.reducer;

export const {reviewRemoved, reviewAdded} = reviewsSlice.actions;