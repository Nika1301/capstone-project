import { useState, useEffect } from "react";
import CreateHotel from "@/src/components/Hotel";
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

function getNewHotel() {
  return { id: uuidv4(), hotel: "", hotelPrice: "" };
}

export default function HotelList({ city, handleHotelChange }) {
  const [hotels, setHotels] = useState([getNewHotel()]);

  useEffect(() => {
    setHotels(city.hotels);
  }, [city.hotels]);

  function handleHotelClick() {
    setHotels([...hotels, getNewHotel()]);
  }

  return (
    <div>
      {hotels.map((hotel) => {
        return (
          <CreateHotel
            key={hotel.id}
            hotel={hotel}
            handleHotelChange={handleHotelChange}
          />
        );
      })}
      <StyledButton type="button" onClick={handleHotelClick}>
        Add
      </StyledButton>
    </div>
  );
}