import { useState, useEffect } from "react";
import CreateHotel from "@/src/components/Hotel";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButtonWithDisable,
  StyledSection,
} from "../CityCreateForm/StyledCityCreate";

function getNewHotel() {
  return { id: uuidv4(), hotel: "", hotelPrice: "" };
}

export default function HotelList({
  city,
  handleHotelChange,
  handleDeleteHotel,
}) {
  const [hotels, setHotels] = useState([getNewHotel()]);
  const [isAddHotelDisabled, setIsAddHotelDisabled] = useState(false);
  useEffect(() => {
    setHotels(city.hotels);
  }, [city.hotels]);

  useEffect(() => {
    const isAnyHotelFieldEmpty = hotels.some((hotel) => hotel.hotel === "");
    setIsAddHotelDisabled(isAnyHotelFieldEmpty);
  }, [hotels]);

  function handleHotelClick() {
    setHotels([...hotels, getNewHotel()]);
  }
  function handleDeleteClick(hotelId) {
    if (hotels.length === 1) {
      const emptyHotel = getNewHotel();
      setHotels([emptyHotel]);
      handleDeleteHotel(hotelId);
      return;
    }
    setHotels((prevHotels) =>
      prevHotels.filter((hotel) => hotel.id !== hotelId)
    );
    handleDeleteHotel(hotelId);
  }
  return (
    <StyledSection>
      <div>
        {hotels.map((hotel) => {
          return (
            <CreateHotel
              key={hotel.id}
              hotel={hotel}
              handleHotelChange={handleHotelChange}
              handleDeleteHotel={handleDeleteClick}
            />
          );
        })}
      </div>
      <div>
        <StyledButtonWithDisable
          type="button"
          onClick={handleHotelClick}
          disabled={isAddHotelDisabled}
        >
          Add
        </StyledButtonWithDisable>
      </div>
    </StyledSection>
  );
}
