import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
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
} from "../../../src/components/StyledTripDetails";
import Header from "@/src/components/Header/Header";
import { useAppStore } from "@/lib/store";

export default function DetailsOfTrip() {
  const router = useRouter();
  const cityName = router.query.city;
  const { countries } = useAppStore();
  const country = countries.find((country) =>
    country.cities.find((city) => city.id === cityName)
  );

  const city = country?.cities.find((city) => city.id === cityName);

  if (!city) {
    return <h2>City not found</h2>;
  }

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
        <StyledUl>
          {city.hotels.map((hotel) => (
            <StyledList key={uuidv4()}>
              <StyledSpan>{hotel.hotel}</StyledSpan>
              {hotel.hotelPrice ? (
                <StyledSpan>{hotel.hotelPrice} Euro</StyledSpan>
              ) : null}
            </StyledList>
          ))}

          <StyledDiv>
            <StyledTotalPrice>Total Price:</StyledTotalPrice>
            <StyledTotalPrice>{totalPriceOfHotels} Euro</StyledTotalPrice>
          </StyledDiv>
        </StyledUl>

        <StyledH4>Places to visit:</StyledH4>
        <StyledUl>
          {city.places.map((place) => (
            <StyledList key={uuidv4()}>
              <StyledSpan>{place.place}</StyledSpan>
              {place.placePrice ? (
                <StyledSpan> {place.placePrice} Euro </StyledSpan>
              ) : null}
            </StyledList>
          ))}
        </StyledUl>
        <StyledDiv>
          <StyledTotalPrice>Total Price:</StyledTotalPrice>
          <StyledTotalPrice>{totalPriceOfPlaces} Euro</StyledTotalPrice>
        </StyledDiv>

        <StyledH4>Food to try:</StyledH4>
        <StyledUl>
          {city.food.map((food) => (
            <StyledList key={uuidv4()}>
              <StyledSpan>{food.foodName}</StyledSpan>
              {food.foodPrice ? (
                <StyledSpan>{food.foodPrice} Euro</StyledSpan>
              ) : null}
            </StyledList>
          ))}
        </StyledUl>
        <StyledDiv>
          <StyledTotalPrice>Total Price:</StyledTotalPrice>
          <StyledTotalPrice> {totalPriceOfFoods} Euro</StyledTotalPrice>
        </StyledDiv>

        <StyledDiv>
          <StyledTotalPrice>How much I spent on the trip:</StyledTotalPrice>{" "}
          <StyledTotalPrice>{totalPrice} Euro</StyledTotalPrice>
        </StyledDiv>
        <StyledH4>Notes:</StyledH4>
        <p>{city.note}</p>
      </StyledSection>
    </>
  );
}
