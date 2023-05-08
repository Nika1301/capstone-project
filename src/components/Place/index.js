import {
  StyledInput,
  StyledLabel,
  StyledInputSmall,
  StyledDiv
} from "../CityCreateForm/StyledCityCreate";
import { useState } from "react";

export default function CreatePlace({ place, handlePlaceChange }) {
  const [placeName, setPlacelName] = useState("");
  const [placePrice, setPlacePrice] = useState(0);
  function handleChange(event) {
    setPlacelName(event.target.value);
    handlePlaceChange({
      id: place.id,
      place: placeName,
      placePrice: placePrice,
    });
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
        />
      </div>
    </StyledDiv>
  );
}
