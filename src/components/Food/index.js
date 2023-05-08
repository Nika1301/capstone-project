import {
  StyledInput,
  StyledLabel,
  StyledInputSmall,
  StyledDiv
} from "../CityCreateForm/StyledCityCreate";
import { useState } from "react";

export default function CreateFood({ food, handleFoodChange }) {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);
  function handleChange(event) {
    setFoodName(event.target.value);
    handleFoodChange({
      id: food.id,
      foodName: foodName,
      foodPrice: foodPrice,
    });
  }
  return (
    <StyledDiv>
      <div>
        <StyledLabel htmlFor="foodName">Food to try:</StyledLabel>
        <StyledInput
          id="foodName"
          name="foodName"
          type="text"
          placeholder="...add food"
          onChange={handleChange}
        />
      </div>
      <div>
        <StyledLabel htmlFor="foodPrice">Price:</StyledLabel>
        <StyledInputSmall
          id="foodPrice"
          name="foodPrice"
          type="number"
          min={0}
          onChange={(event) => {
            setFoodPrice(parseInt(event.target.value));
            handleFoodChange({
              id: food.id,
              foodName: foodName,
              foodPrice: parseInt(event.target.value),
            });
          }}
        />
      </div>
    </StyledDiv>
  );
}
