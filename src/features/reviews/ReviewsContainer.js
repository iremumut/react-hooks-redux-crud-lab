import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import {useSelector, useDispatch} from "react-redux";
import {reviewAdded,reviewRemoved} from "./reviewsSlice";

function ReviewsContainer({restaurantId}) {


  const reviews = useSelector((state) => state.reviews.entities);

  const resReviews = reviews.filter((review) => {
    return review.restaurantId === restaurantId;
  })

  const dispatch = useDispatch();

  const handleAddReview = (comment,resId) => {
    dispatch(reviewAdded({comment: comment, restaurantId: restaurantId}));
  }


  return (
    <div>
      <ReviewInput restaurantId={restaurantId} handleAddReview={handleAddReview}/>
      <Reviews reviews={resReviews} />
    </div>
  );
}

export default ReviewsContainer;
