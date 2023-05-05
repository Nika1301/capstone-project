import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButton,
  StyledList,
  StyledDiv,
  StyledCountry,
  StyledSection,
  StyledSpan,
  StyledH4,
  StyledTotalPrice,
} from "../../src/components/StyledTripDetails";
import Header from "@/src/components/Header/Header";
import { useAppStore } from "@/lib/store";

export default function DetailsOfTrip() {
  const router = useRouter();
  const cityName = router.query.city;
  const { countries } = useAppStore();
  const country = countries.find((country) =>
    country.cities.find((city) => city.city === cityName)
  );

  const city = country?.cities.find((city) => city.city === cityName);

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

  const backHome = () => {
    router.push("/");
  };

  return (
    <>
      <Header title="Details of traveling" />
      <StyledButton onClick={backHome}> Home</StyledButton>
      <StyledSection>
        <StyledCountry>{country.country}</StyledCountry>
        <StyledH4>
          {city.city}
          <StyledSpan>{city.startDate}</StyledSpan>
          <StyledSpan>{city.endDate}</StyledSpan>
        </StyledH4>
        <StyledH4>Hotels:</StyledH4>
        <ul>
          {city.hotels.map((hotel) => (
            <StyledList key={uuidv4()}>
              <StyledSpan>{hotel.hotel}</StyledSpan>
              <StyledSpan>{hotel.hotelPrice} Euro</StyledSpan>
            </StyledList>
          ))}

          <StyledDiv>
            <StyledTotalPrice>Total Price:</StyledTotalPrice>
            <p>{totalPriceOfHotels} Euro</p>
          </StyledDiv>
        </ul>

        <StyledH4>Places to visit:</StyledH4>
        <ul>
          {city.places.map((place) => (
            <StyledList key={uuidv4()}>
              <StyledDiv>
                <StyledSpan>{place.place}</StyledSpan>
                <StyledSpan> {place.placePrice} Euro</StyledSpan>
              </StyledDiv>
            </StyledList>
          ))}
          <StyledDiv>
            <StyledTotalPrice>Total Price:</StyledTotalPrice>
            <p>{totalPriceOfPlaces} Euro</p>
          </StyledDiv>
        </ul>
        <StyledH4>Food to try:</StyledH4>
        <ul>
          {city.food.map((food) => (
            <StyledList key={uuidv4()}>
              <StyledDiv>
                <StyledSpan>{food.foodName}</StyledSpan>
                <StyledSpan>{food.foodPrice} Euro</StyledSpan>
              </StyledDiv>
            </StyledList>
          ))}

          <StyledDiv>
            <StyledTotalPrice>Total Price:</StyledTotalPrice>
            <p>{totalPriceOfFoods} Euro</p>
          </StyledDiv>
        </ul>
        <StyledDiv>
          <StyledTotalPrice>How much I spent on the trip:</StyledTotalPrice>
          <p>{totalPrice} Euro </p>
        </StyledDiv>
        <StyledH4>Notes:</StyledH4>
        <p>{city.note}</p>
      </StyledSection>
    </>
  );
}
