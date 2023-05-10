import { useState, useEffect } from "react";
import CreateFood from "@/src/components/Food";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #0d5c63;
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: #cbf3f0;
  font-weight: bold;
  &:hover {
    color: #063539;
    background-color: #2ec4b6;
  }
  &:active {
    transform: scale(0.95);
  }
`;

function getNewFood() {
  return { id: uuidv4(), foodName: "", foodPrice: "" };
}

export default function FoodList({ city, handleFoodChange }) {
  const [food, setFood] = useState([getNewFood()]);

  useEffect(() => {
    setFood(city.food);
  }, [city.food]);

  function handleFoodClick() {
    setFood([...food, getNewFood()]);
  }

  return (
    <div>
      {food.map((food) => {
        return (
          <CreateFood
            key={food.id}
            food={food}
            handleFoodChange={handleFoodChange}
          />
        );
      })}
      <StyledButton type="button" onClick={handleFoodClick}>
        Add
      </StyledButton>
    </div>
  );
}
