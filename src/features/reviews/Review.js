import React from "react";
import {useDispatch} from "react-redux";
import {reviewRemoved} from "./reviewsSlice";

function Review({ review }) {
  const dispatch = useDispatch();
  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={() => dispatch(reviewRemoved(review.id))}> Delete Review </button>
    </div>
  );
}

export default Review;
