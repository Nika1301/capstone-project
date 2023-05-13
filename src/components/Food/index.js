import {
  StyledInput,
  StyledLabel,
  StyledInputSmall,
  StyledDiv,
  StyledButtonWithDelete,
} from "../CityCreateForm/StyledCityCreate";
import { useState, useEffect } from "react";

export default function CreateFood({
  food,
  handleFoodChange,
  handleDeleteFood,
}) {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState(food.foodPrice || 0);

  useEffect(() => {
    setFoodName(food.foodName || "");
  }, [food]);

  function handleChange(event) {
    setFoodName(event.target.value);
    handleFoodChange({
      id: food.id,
      foodName: event.target.value,
      foodPrice: foodPrice,
    });
  }
  function handleDelete() {
    handleDeleteFood(food.id);
  }
  function canDeleteFood() {
    return foodName !== "";
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
          defaultValue={food.foodName}
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
          defaultValue={food.foodPrice}
        />
      </div>
      <StyledButtonWithDelete
        onClick={handleDelete}
        disabled={!canDeleteFood()}
      >
        Delete
      </StyledButtonWithDelete>
    </StyledDiv>
  );
}
