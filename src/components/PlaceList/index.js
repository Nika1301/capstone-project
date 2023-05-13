import { useState, useEffect } from "react";
import CreatePlace from "@/src/components/Place";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButtonWithDesable,
  StyledSection,
} from "../CityCreateForm/StyledCityCreate";

function getNewPlace() {
  return { id: uuidv4(), place: "", placePrice: "" };
}

export default function PlaceList({
  city,
  handlePlaceChange,
  handleDeletePlace,
}) {
  const [places, setPlaces] = useState([getNewPlace()]);
  const [isAddPlaceDisabled, setIsAddPlaceDisabled] = useState(false);

  useEffect(() => {
    setPlaces(city.places);
  }, [city.places]);

  useEffect(() => {
    const isAnyHotelFieldEmpty = places.some((place) => place.place === "");
    setIsAddPlaceDisabled(isAnyHotelFieldEmpty);
  }, [places]);

  function handlePlaceClick() {
    setPlaces([...places, getNewPlace()]);
  }
  function handleDeleteClick(placeId) {
    if (places.lenght === 1) {
      const emptyPlace = getNewPlace();
      setPlaces([emptyPlace]);
      handleDeletePlace(placeId);
      return;
    }
    setPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== placeId)
    );
    handleDeletePlace(placeId);
  }

  return (
    <StyledSection>
      <div>
        {places.map((place) => {
          return (
            <CreatePlace
              key={place.id}
              place={place}
              handlePlaceChange={handlePlaceChange}
              handleDeletePlace={handleDeleteClick}
            />
          );
        })}
      </div>
      <div>
        <StyledButtonWithDesable
          type="button"
          onClick={handlePlaceClick}
          disabled={isAddPlaceDisabled}
        >
          Add
        </StyledButtonWithDesable>
      </div>
    </StyledSection>
  );
}
