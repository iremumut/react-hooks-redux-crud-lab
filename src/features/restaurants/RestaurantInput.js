import React from "react";
import { useState } from "react";

function RestaurantInput({handleFormSubmit}) {

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(name);
    setName("");
  }

  return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="Name">Name</label>
    <input type="text" name="Name" id="Name" onChange={handleChange} value={name}></input>
    <button type="submit">Add Restaurant</button>
  </form>);
}

export default RestaurantInput;
