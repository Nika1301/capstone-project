import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  StyledList,
  StyledDiv,
  StyledCountry,
  StyledSection,
  StyledSpan,
  StyledH4,
  StyledLink,
  StyledTotalPrice,
  StyledUl,
  StyledButtonDelete,
  StyledPopup,
  StyledEditLink,
  StyledBlox,
} from "../../../src/components/StyledTripDetails";
import Header from "@/src/components/Header/Header";
import { useAppStore } from "@/lib/store";
import Footer from "@/src/components/Footer/Footer";
export default function DetailsOfTrip() {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const router = useRouter();
  const cityName = router.query.city;
  const { countries, deleteCity } = useAppStore();

  const country = countries.find((country) =>
    country.cities.find((city) => city.id === cityName)
  );
  const city = country?.cities.find((city) => city.id === cityName);

  if (!city) {
    return <h2>City not found</h2>;
  }
  const handleDeleteClick = () => {
    deleteCity(city.id);
    router.push("/");
  };
  const handleConfirmDeleteClick = () => {
    setShowConfirmPopup(false);
    handleDeleteClick();
  };

  const handleCancelDeleteClick = () => {
    setShowConfirmPopup(false);
  };

  const totalHotelPrice = city.hotels.map((hotel) => hotel.hotelPrice);
  const totalPriceOfHotels = totalHotelPrice.reduce(
    (hotelPrice, price) => hotelPrice + Number(price),
    0
  );

  const totalPlacePrice = city.places.map((place) => place.placePrice);
  const totalPriceOfPlaces = totalPlacePrice.reduce(
    (placePrice, price) => placePrice + Number(price),
    0
  );

  const totalFoodPrice = city.food.map((food) => food.foodPrice);
  const totalPriceOfFoods = totalFoodPrice.reduce(
    (foodPrice, price) => foodPrice + Number(price),
    0
  );

  let totalPrice = totalPriceOfHotels + totalPriceOfPlaces + totalPriceOfFoods;

  return (
    <>
      <Header title="Details of traveling" />
      <StyledLink href="/"> Home</StyledLink>
      <StyledEditLink href={`/DetailsTrip/${city.id}/edit`}>
        Edit
      </StyledEditLink>
      <StyledButtonDelete onClick={() => setShowConfirmPopup(true)}>
        Delete
      </StyledButtonDelete>
      {showConfirmPopup && (
        <StyledPopup>
          <p>Are you sure you want to delete this city?</p>
          <button onClick={handleConfirmDeleteClick}>YES</button>
          <button onClick={handleCancelDeleteClick}>NO</button>
        </StyledPopup>
      )}
      <StyledSection>
        <StyledCountry>{country.country}</StyledCountry>
        <StyledH4>
          {city.city}
          {city.startDate && city.endDate ? (
            <StyledSpan>
              {city.startDate} - {city.endDate}
            </StyledSpan>
          ) : null}
        </StyledH4>
        <StyledH4>Hotels:</StyledH4>
        <StyledBlox>
          <StyledUl>
            {city.hotels
              .filter((hotel) => !!hotel.hotel)
              .map(({ id, hotel, hotelPrice }) => (
                <StyledList key={id}>
                  <StyledSpan>{hotel}</StyledSpan>
                  {hotelPrice ? (
                    <StyledSpan>{hotelPrice} Euro</StyledSpan>
                  ) : null}
                </StyledList>
              ))}
            <StyledDiv>
              <StyledTotalPrice>Total Price:</StyledTotalPrice>
              <StyledTotalPrice>{totalPriceOfHotels} Euro</StyledTotalPrice>
            </StyledDiv>
          </StyledUl>
        </StyledBlox>
        <StyledH4>Places to visit:</StyledH4>
        <StyledBlox>
          <StyledUl>
            {city.places
              .filter((place) => !!place.place)
              .map(({ id, place, placePrice }) => (
                <StyledList key={id}>
                  <StyledSpan>{place}</StyledSpan>
                  {placePrice ? (
                    <StyledSpan>{placePrice}Euro </StyledSpan>
                  ) : null}
                </StyledList>
              ))}
          </StyledUl>
          <StyledDiv>
            <StyledTotalPrice>Total Price:</StyledTotalPrice>
            <StyledTotalPrice>{totalPriceOfPlaces} Euro</StyledTotalPrice>
          </StyledDiv>
        </StyledBlox>
        <StyledH4>Food to try:</StyledH4>
        <StyledBlox>
          <StyledUl>
            {city.food
              .filter((meal) => !!meal.place)
              .map(({ id, foodName, foodPrice }) => (
                <StyledList key={id}>
                  <StyledSpan>{foodName}</StyledSpan>
                  {foodPrice ? <StyledSpan>{foodPrice} Euro</StyledSpan> : null}
                </StyledList>
              ))}
          </StyledUl>
          <StyledDiv>
            <StyledTotalPrice>Total Price:</StyledTotalPrice>
            <StyledTotalPrice> {totalPriceOfFoods} Euro</StyledTotalPrice>
          </StyledDiv>
        </StyledBlox>

        <StyledDiv>
          <StyledTotalPrice>How much I spent on the trip:</StyledTotalPrice>{" "}
          <StyledTotalPrice>{totalPrice} Euro</StyledTotalPrice>
        </StyledDiv>
        <StyledH4>Notes:</StyledH4>
        <StyledBlox>
          <p>{city.note}</p>
        </StyledBlox>
      </StyledSection>
      <Footer />
    </>
  );
}
