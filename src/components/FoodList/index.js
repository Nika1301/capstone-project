import { useState, useEffect } from "react";
import CreateFood from "@/src/components/Food";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButtonWithDesable,
  StyledSection,
} from "../CityCreateForm/StyledCityCreate";

function getNewFood() {
  return { id: uuidv4(), foodName: "", foodPrice: "" };
}

export default function FoodList({ city, handleFoodChange, handleDeleteFood }) {
  const [foods, setFood] = useState([getNewFood()]);
  const [isAddFoodDisabled, setIsAddFoodDisabled] = useState(false);

  useEffect(() => {
    setFood(city.food);
  }, [city.food]);
  useEffect(() => {
    const isAnyFoodFieldEmpty = foods.some((food) => food.foodName === "");
    setIsAddFoodDisabled(isAnyFoodFieldEmpty);
  }, [foods]);

  function handleFoodClick() {
    setFood([...foods, getNewFood()]);
  }

  return (
    <StyledSection>
      <div>
        {foods.map((food) => {
          return (
            <CreateFood
              key={food.id}
              food={food}
              handleFoodChange={handleFoodChange}
              handleDeleteFood={handleDeleteFood}
            />
          );
        })}
      </div>
      <div>
        <StyledButtonWithDesable
          type="button"
          onClick={handleFoodClick}
          disabled={isAddFoodDisabled}
        >
          Add
        </StyledButtonWithDesable>
      </div>
    </StyledSection>
  );
}
