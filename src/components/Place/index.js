import {
  StyledInput,
  StyledLabel,
  StyledInputSmall,
  StyledDiv,
  StyledButtonWithDelete,
} from "../CityCreateForm/StyledCityCreate";
import { useState, useEffect } from "react";

export default function CreatePlace({
  place,
  handlePlaceChange,
  handleDeletePlace,
}) {
  const [placeName, setPlacelName] = useState("");
  const [placePrice, setPlacePrice] = useState(place.placePrice || 0);

  useEffect(() => {
    setPlacelName(place.place || "");
  }, [place]);

  function handleChange(event) {
    setPlacelName(event.target.value);
    handlePlaceChange({
      id: place.id,
      place: event.target.value,
      placePrice: placePrice,
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
      <StyledButtonWithDelete
        onClick={handleDelete}
        disabled={!canDeletePlace()}
      >
        Delete
      </StyledButtonWithDelete>
    </StyledDiv>
  );
}
