import {
  StyledInput,
  StyledLabel,
  StyledInputSmall,
  StyledDiv,
  StyledButtonWithDisable,
} from "../CityCreateForm/StyledCityCreate";
import { useState, useEffect } from "react";

export default function CreatePlace({
  place,
  handlePlaceChange,
  handleDeletePlace,
}) {
  const [placeName, setPlaceName] = useState("");
  const [placePrice, setPlacePrice] = useState(place.placePrice || 0);

  useEffect(() => {
    setPlaceName(place.place || "");
  }, [place]);

  function handleChange(event) {
    setPlaceName(event.target.value);
    handlePlaceChange({
      id: place.id,
      place: event.target.value,
      placePrice,
    });
  }
  function handleDelete() {
    handleDeletePlace(place.id);
  }

  function canDeletePlace() {
    return placeName !== "";
  }
  return (
    <StyledDiv>
      <div>
        <StyledLabel htmlFor="placeName">Place(s) to visit:</StyledLabel>
        <StyledInput
          id="placeName"
          name="place"
          type="text"
          placeholder="..add place"
          onChange={handleChange}
          defaultValue={place.place}
        />
      </div>
      <div>
        <StyledLabel htmlFor="placePrice">Price:</StyledLabel>
        <StyledInputSmall
          id="placePrice"
          name="placePrice"
          type="number"
          min={0}
          onChange={(event) => {
            setPlacePrice(parseInt(event.target.value));
            handlePlaceChange({
              id: place.id,
              place: placeName,
              placePrice: parseInt(event.target.value),
            });
          }}
          defaultValue={place.placePrice}
        />
      </div>
      <StyledButtonWithDisable
        onClick={handleDelete}
        disabled={!canDeletePlace()}
      >
        Delete
      </StyledButtonWithDisable>
    </StyledDiv>
  );
}
