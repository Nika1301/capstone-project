import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppStore } from "@/lib/store";
import { v4 as uuidv4 } from "uuid";
import { countries } from "@/lib/db";
import Header from "../Header/Header";
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
  StyledButtonWithDisable,
} from "./StyledCityCreate";
import CreateHotel from "../Hotel";
import CreatePlace from "../Place";
import CreateFood from "../Food";
import Footer from "../Footer/Footer";

export default function Form() {
  const router = useRouter();
  const addCity = useAppStore((state) => state.addCity);

  const [hotels, setHotels] = useState([
    { id: uuidv4(), hotel: "", hotelPrice: "" },
  ]);

  const [places, setPlaces] = useState([
    { id: uuidv4(), place: "", placePrice: "" },
  ]);
  const [foods, setFood] = useState([
    { id: uuidv4(), foodName: "", foodPrice: "" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    addCity({ ...data, hotels: hotels, places: places, food: foods });
    event.target.reset();
    router.push("/");
  }

  const [isAddHotelDisabled, setIsAddHotelDisabled] = useState(false);
  const [isAddPlaceDisabled, setIsAddPlaceDisabled] = useState(false);
  const [isAddFoodDisabled, setIsAddFoodDisabled] = useState(false);

  function handleHotelClick() {
    const firstHotel = hotels[0];
    if (firstHotel.hotel === "") {
      return;
    }
    setHotels([...hotels, { id: uuidv4(), hotel: "", hotelPrice: "" }]);
  }
  function handleDeleteHotel(hotelId) {
    const emptyHotels = [{ id: "", hotel: "", hotelDay: 0, hotelDayPrice: 0 }];
    if (hotels.length === 1) {
      setHotels(emptyHotels);
    } else {
      setHotels((prevHotels) =>
        prevHotels.filter((hotel) => hotel.id !== hotelId)
      );
    }
  }

  function handleHotelChange(newHotel) {
    setHotels(
      hotels.map((hotel) => {
        if (hotel.id === newHotel.id) {
          return newHotel;
        }
        return hotel;
      })
    );
  }
  useEffect(() => {
    const isAnyHotelFieldEmpty = hotels.some((hotel) => hotel.hotel === "");
    setIsAddHotelDisabled(isAnyHotelFieldEmpty);
  }, [hotels]);

  function handlePlaceClick() {
    const firstPlace = places[0];
    if (firstPlace.place === "") {
      return;
    }
    setPlaces([...places, { id: uuidv4(), place: "", placePrice: "" }]);
  }
  function handleDeletePlace(placeId) {
    const emptyPlace = [{ id: "", place: "", placePrice: 0 }];
    if (places.length === 1) {
      setPlaces(emptyPlace);
    } else {
      setPlaces((prevPlaces) =>
        prevPlaces.filter((place) => place.id !== placeId)
      );
    }
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
  useEffect(() => {
    const isAnyPlaceFieldEmpty = places.some((place) => place.place === "");
    setIsAddPlaceDisabled(isAnyPlaceFieldEmpty);
  }, [places]);

  function handleFoodClick() {
    const firstFood = foods[0];
    if (firstFood.foodName === "") {
      return;
    }
    setFood([...foods, { id: uuidv4(), foodName: "", foodPrice: "" }]);
  }
  function handleDeleteFood(foodId) {
    const emptyFood = [{ id: "", foodName: "", foodPrice: 0 }];
    if (foods.length === 1) {
      setFood(emptyFood);
    } else {
      setFood((prevFood) => prevFood.filter((meal) => meal.id !== foodId));
    }
  }
  function handleFoodChange(newFood) {
    setFood(
      foods.map((meal) => {
        if (meal.id === newFood.id) {
          return newFood;
        }
        return meal;
      })
    );
  }
  useEffect(() => {
    const isAnyFoodFieldEmpty = foods.some((meal) => meal.foodName === "");
    setIsAddFoodDisabled(isAnyFoodFieldEmpty);
  }, [foods]);

  return (
    <>
      <Header title="Create Your Trip" />
      <StyledLink href="/">Back</StyledLink>
      <StyledFormContainer aria-labelledby="city" onSubmit={handleSubmit}>
        <StyledLabel htmlFor="countryName">Country:</StyledLabel>
        <StyledSelect id="countryName" name="countryID" required>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.country}
            </option>
          ))}
        </StyledSelect>

        <StyledDiv>
          <div>
            <StyledLabel htmlFor="cityName">Add city:</StyledLabel>
            <StyledInput
              id="cityName"
              name="city"
              type="text"
              placeholder="...add city"
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="startDate">Start date:</StyledLabel>
            <StyledInputSmall id="startDate" name="startDate" type="date" />
          </div>
          <div>
            <StyledLabel htmlFor="endDate">End date:</StyledLabel>
            <StyledInputSmall id="endDate" name="endDate" type="date" />
          </div>
        </StyledDiv>
        <StyledSection>
          <StyledDivSection>
            {hotels.map((hotel) => (
              <CreateHotel
                key={hotel.id}
                handleHotelChange={handleHotelChange}
                handleDeleteHotel={handleDeleteHotel}
                hotel={hotel}
              />
            ))}
          </StyledDivSection>

          <StyledButtonWithDisable
            type="button"
            onClick={handleHotelClick}
            disabled={isAddHotelDisabled}
          >
            Add
          </StyledButtonWithDisable>
        </StyledSection>

        <StyledSection>
          <StyledDivSection>
            {places.map((place) => (
              <CreatePlace
                key={place.id}
                handlePlaceChange={handlePlaceChange}
                handleDeletePlace={handleDeletePlace}
                place={place}
              />
            ))}
          </StyledDivSection>
          <StyledButtonWithDisable
            type="button"
            onClick={handlePlaceClick}
            disabled={isAddPlaceDisabled}
          >
            Add
          </StyledButtonWithDisable>
        </StyledSection>

        <StyledSection>
          <StyledDivSection>
            {foods.map((food) => (
              <CreateFood
                key={food.id}
                handleFoodChange={handleFoodChange}
                handleDeleteFood={handleDeleteFood}
                food={food}
              />
            ))}
          </StyledDivSection>

          <StyledButtonWithDisable
            type="button"
            onClick={handleFoodClick}
            disabled={isAddFoodDisabled}
          >
            Add
          </StyledButtonWithDisable>
        </StyledSection>
        <StyledLabel htmlFor="notes">Notes:</StyledLabel>
        <StyledTextarea
          name="note"
          id="notes"
          cols="30"
          rows="10"
          placeholder="...add your notes"
        ></StyledTextarea>

        <StyledButton type="submit">Create</StyledButton>
      </StyledFormContainer>
      <Footer />
    </>
  );
}
