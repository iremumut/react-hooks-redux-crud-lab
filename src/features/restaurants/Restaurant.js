import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import {useDispatch} from  "react-redux";
import {restaurantRemoved} from  "./restaurantsSlice";

function Restaurant({ restaurant}) {
  const dispatch = useDispatch();

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={ () => dispatch(restaurantRemoved(restaurant.id))}> Delete Restaurant </button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
