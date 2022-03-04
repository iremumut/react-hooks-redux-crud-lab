import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({restaurants}) {
  
  return (
  <ul>
    {restaurants.map((res) => {
      return <Restaurant key={res.id} restaurant={res}></Restaurant>
    })}
  </ul>);
}

export default Restaurants;
