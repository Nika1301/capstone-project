import {
  StyledInput,
  StyledLabel,
  StyledInputSmall,
  StyledDiv,
  StyledTotalPrice,
} from "../CityCreateForm/StyledCityCreate";
import { useState } from "react";

export default function CreateHotel({ hotel, handleHotelChange }) {
  const [hotelName, setHotelName] = useState("");
  const [dayshotel, setDayshotel] = useState(0);
  const [dayprice, setDayprice] = useState(0);

  function handleChange(event) {
    setHotelName(event.target.value);
    handleHotelChange({
      id: hotel.id,
      hotel: hotelName,
      hotelPrice: dayshotel * dayprice,
    });
  }

  return (
    <StyledDiv>
      <div>
        <StyledLabel htmlFor="hotelName">Hotel/Apartment:</StyledLabel>
        <StyledInput
          id="hotelName"
          name="hotel"
          type="text"
          placeholder="...add hotel name"
          onChange={handleChange}
        />
      </div>
      <div>
        <StyledLabel htmlFor="days">Day(s):</StyledLabel>
        <StyledInputSmall
          id="days"
          type="number"
          min={0}
          onChange={(event) => {
            setDayshotel(parseInt(event.target.value));
            handleHotelChange({
              id: hotel.id,
              hotel: hotelName,
              hotelPrice: parseInt(event.target.value) * dayprice,
            });
          }}
        />
      </div>
      <div>
        <StyledLabel htmlFor="dayPrice">Price:</StyledLabel>
        <StyledInputSmall
          id="dayPrice"
          type="number"
          min={0}
          onChange={(event) => {
            setDayprice(parseInt(event.target.value));
            handleHotelChange({
              id: hotel.id,
              hotel: hotelName,
              hotelPrice: parseInt(event.target.value) * dayshotel,
            });
          }}
        />
      </div>
      <StyledTotalPrice>{dayprice * dayshotel}</StyledTotalPrice>
    </StyledDiv>
  );
}
