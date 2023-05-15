import {
  StyledInput,
  StyledLabel,
  StyledInputSmall,
  StyledDiv,
  StyledTotalPrice,
  StyledButtonWithDisable,
} from "../CityCreateForm/StyledCityCreate";

import { useState, useEffect } from "react";

export default function CreateHotel({
  hotel,
  handleHotelChange,
  handleDeleteHotel,
}) {
  const [hotelName, setHotelName] = useState("");
  const [daysHotel, setDaysHotel] = useState(hotel.hotelDay || 0);
  const [dayPrice, setDayPrice] = useState(hotel.dayPrice || 0);

  useEffect(() => {
    setHotelName(hotel.hotel || "");
  }, [hotel]);

  function handleChange(event) {
    setHotelName(event.target.value);
    handleHotelChange({
      id: hotel.id,
      hotel: event.target.value,
      daysHotel,
      dayPrice,
      hotelPrice: daysHotel * dayPrice,
    });
  }
  function handleDelete() {
    handleDeleteHotel(hotel.id);
  }
  function canDeleteHotel() {
    return hotelName !== "";
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
          value={hotelName}
        />
      </div>
      <div>
        <StyledLabel htmlFor="days">Day(s):</StyledLabel>
        <StyledInputSmall
          id="days"
          type="number"
          min={0}
          onChange={(event) => {
            setDaysHotel(parseInt(event.target.value));
            handleHotelChange({
              id: hotel.id,
              hotel: hotelName,
              hotelDay: daysHotel,
              dayPrice: dayPrice,
              hotelPrice: parseInt(event.target.value) * dayPrice,
            });
          }}
          defaultValue={hotel.hotelDay}
        />
      </div>
      <div>
        <StyledLabel htmlFor="dayPrice">Price:</StyledLabel>
        <StyledInputSmall
          id="dayPrice"
          type="number"
          min={0}
          onChange={(event) => {
            setDayPrice(parseInt(event.target.value));
            handleHotelChange({
              id: hotel.id,
              hotel: hotelName,
              hotelDay: daysHotel,
              dayPrice: dayPrice,
              hotelPrice: parseInt(event.target.value) * daysHotel,
            });
          }}
          defaultValue={hotel.dayPrice}
        />
      </div>
      <StyledTotalPrice>{dayPrice * daysHotel} Euro</StyledTotalPrice>
      <StyledButtonWithDisable
        onClick={handleDelete}
        disabled={!canDeleteHotel()}
      >
        Delete
      </StyledButtonWithDisable>
    </StyledDiv>
  );
}
