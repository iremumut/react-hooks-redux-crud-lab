import React from "react";
import { useState } from "react";
import Reviews from "./Reviews";

function ReviewInput({restaurantId, handleAddReview}) {

  const [comment, setComment] = useState("");

  const handleChange = (e) => {
      setComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddReview(comment, restaurantId);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Comment">Comment</label>
      <textarea id="Comment" value={comment} onChange={handleChange}></textarea>
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewInput;
