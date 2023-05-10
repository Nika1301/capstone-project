import { useState, useEffect } from "react";
import CreatePlace from "@/src/components/Place";
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

function getNewPlace() {
  return { id: uuidv4(), place: "", placePrice: "" };
}

export default function PlaceList({ city, handlePlaceChange }) {
  const [places, setPlaces] = useState([getNewPlace()]);

  useEffect(() => {
    setPlaces(city.places);
  }, [city.places]);

  function handlePlaceClick() {
    setPlaces([...places, getNewPlace()]);
  }

  return (
    <div>
      {places.map((place) => {
        return (
          <CreatePlace
            key={place.id}
            place={place}
            handlePlaceChange={handlePlaceChange}
          />
        );
      })}
      <StyledButton type="button" onClick={handlePlaceClick}>
        Add
      </StyledButton>
    </div>
  );
}
