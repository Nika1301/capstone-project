import { useRouter } from "next/router";
``;
import { useAppStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButton,
  StyledLink,
  StyledFormContainer,
  StyledInput,
  StyledTextarea,
  StyledLabel,
  StyledDiv,
  StyledInputSmall,
  StyledSelect,
  StyledSection,
  StyledDivSection,
} from "@/src/components/CityCreateForm/StyledCityCreate";
import Header from "@/src/components/Header/Header";
import CreatePlace from "@/src/components/Place";
import CreateHotel from "@/src/components/Hotel";
import CreateFood from "@/src/components/Food";

export default function EditCity() {
  const router = useRouter();
  const cityId = router.query.city;
  const findCityByID = useAppStore((state) => state.findCityByID);
  const updateCity = useAppStore((state) => state.updateCity);
  const city = findCityByID(cityId);
  const [hotels, setHotels] = useState([
    { id: uuidv4(), hotel: "", hotelPrice: "" },
  ]);

  const [places, setPlaces] = useState([
    { id: uuidv4(), place: "", placePrice: "" },
  ]);
  const [food, setFood] = useState([
    { id: uuidv4(), foodName: "", foodPrice: "" },
  ]);

  useEffect(() => {
    if (!city) {
      return;
    }
    setHotels(city.hotels);
    setPlaces(city.places);
    setFood(city.food);
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    updateCity(cityId, { ...data, hotels, places, food });
    // console.log("Update:", data);
    event.target.reset();
    router.push("/");
  }

  if (!city) {
    return null;
  }
  function handleHotelClick() {
    setHotels([...hotels, { id: uuidv4(), hotel: "", hotelPrice: "" }]);
  }

  function handleHotelChange(newHotel) {
    console.log("Hotel", newHotel);
    setHotels(
      hotels.map((hotel) => {
        if (hotel.id === newHotel.id) {
          return newHotel;
        }
        return hotel;
      })
    );
  }

  function handlePlaceClick() {
    setPlaces([...places, { id: uuidv4(), place: "", placePrice: "" }]);
  }
  function handlePlaceChange(newPlace) {
    setPlaces(
      places.map((place) => {
        if (place.id === newPlace.id) {
          return newPlace;
        }
        return place;
      })
    );
  }

  function handleFoodClick() {
    setFood([...food, { id: uuidv4(), foodName: "", foodPrice: "" }]);
  }
  function handleFoodChange(newFood) {
    setFood(
      food.map((food) => {
        if (food.id === newFood.id) {
          return newFood;
        }
        return food;
      })
    );
  }

  return (
    <>
      <Header title="Edit Your Travel" />
      <StyledLink href={`/DetailsTrip/${city.id}`}>Back</StyledLink>
      <StyledFormContainer aria-labelledby="city" onSubmit={handleSubmit}>
        <StyledLabel htmlFor="countryName">Country:</StyledLabel>
        <StyledSelect id="countryName" name="countryID" required>
          <option>{city.country}</option>
        </StyledSelect>
        <StyledDiv>
          <div>
            <StyledLabel htmlFor="cityName">Add city:</StyledLabel>
            <StyledInput
              id="cityName"
              name="city"
              type="text"
              placeholder="...add city"
              defaultValue={city.city}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="startDate">Start date:</StyledLabel>
            <StyledInputSmall
              id="startDate"
              name="startDate"
              type="date"
              defaultValue={city.startDate}
            />
          </div>
          <div>
            <StyledLabel htmlFor="endDate">End date:</StyledLabel>
            <StyledInputSmall
              id="endDate"
              name="endDate"
              type="date"
              defaultValue={city.endDate}
            />
          </div>
        </StyledDiv>
        <StyledSection>
          <StyledDivSection>
            {hotels.map((hotel) => (
              <CreateHotel
                key={hotel.hotel}
                hotel={hotel}
                handleHotelChange={handleHotelChange}
              />
            ))}
          </StyledDivSection>

          <StyledButton type="button" onClick={handleHotelClick}>
            Add
          </StyledButton>
        </StyledSection>

        <StyledSection>
          <StyledDivSection>
            {places.map((place) => (
              <CreatePlace
                key={place.place}
                place={place}
                handlePlaceChange={handlePlaceChange}
              />
            ))}
          </StyledDivSection>
          <StyledButton type="button" onClick={handlePlaceClick}>
            Add
          </StyledButton>
        </StyledSection>

        <StyledSection>
          <StyledDivSection>
            {food.map((food) => (
              <CreateFood
                key={food.foodName}
                food={food}
                handleFoodChange={handleFoodChange}
              />
            ))}
          </StyledDivSection>

          <StyledButton type="button" onClick={handleFoodClick}>
            Add
          </StyledButton>
        </StyledSection>
        <StyledLabel htmlFor="notes">Notes:</StyledLabel>
        <StyledTextarea
          name="note"
          id="notes"
          cols="30"
          rows="10"
          defaultValue={city.note}
        ></StyledTextarea>

        <StyledButton type="submit">Save</StyledButton>
      </StyledFormContainer>
    </>
  );
}
