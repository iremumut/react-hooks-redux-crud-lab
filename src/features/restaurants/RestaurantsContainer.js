import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import {useSelector, useDispatch} from "react-redux";
import {restaurantAdded,restaurantRemoved} from "./restaurantsSlice";

function RestaurantsContainer() {

  const restaurants = useSelector((state) => state.restaurants.entities);
  const dispatch = useDispatch();

  const handleFormSubmit = (name) => {
    dispatch(restaurantAdded(name));
  }

  return (
    <div>
      <RestaurantInput handleFormSubmit={handleFormSubmit}/>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
