import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import {
  StyleButton,
  StyleList,
  StyleDiv,
  StyleCountry,
  StyleSection,
  StyleSpan,
  StyleH4,
  StyleTotalPrice,
} from "../../src/components/StyledTripDetails";
import Header from "@/src/components/Header/Header";
import { countries } from "@/lib/db";

export default function DetailsOfTrip() {
  const router = useRouter();
  const cityName = router.query.city;

  const country = countries.find((country) =>
    country.cities.find((city) => city.name === cityName)
  );

  const city = country?.cities.find((city) => city.name === cityName);

  if (!city) {
    return <h2>City not found</h2>;
  }

  const totalHotelPrice = city.hotel.map((hotel) => hotel.price);
  const totalPriceOfHotels = totalHotelPrice.reduce(
    (hotelPrice, price) => hotelPrice + Number(price),
    0
  );

  const totalPlacePrice = city.place.map((place) => place.price);
  const totalPriceOfPlaces = totalPlacePrice.reduce(
    (placePrice, price) => placePrice + Number(price),
    0
  );

  const totalFoodPrice = city.food.map((food) => food.price);
  const totalPriceeOfFoods = totalFoodPrice.reduce(
    (foodPrice, price) => foodPrice + Number(price),
    0
  );

  let totalPrice = totalPriceOfHotels + totalPriceOfPlaces + totalPriceeOfFoods;

  const backHome = () => {
    router.push("/");
  };

  return (
    <>
      <Header title="Details of traveling" />
      <StyleButton onClick={backHome}> Home</StyleButton>
      <StyleSection>
        <StyleCountry>{country.name}</StyleCountry>

        <StyleH4>
          {city.name}
          <StyleSpan>{city.startDate}</StyleSpan>
          <StyleSpan>{city.endDate}</StyleSpan>
        </StyleH4>

        <StyleH4>Hotels:</StyleH4>
        <ul>
          {city.hotel.map((hotel) => (
            <StyleList key={uuidv4()}>
              <StyleSpan>{hotel.name}</StyleSpan>
              <StyleSpan>{hotel.price} Euro</StyleSpan>
            </StyleList>
          ))}

          <StyleDiv>
            <StyleTotalPrice>Total Price:</StyleTotalPrice>
            <p>{totalPriceOfHotels} Euro</p>
          </StyleDiv>
        </ul>

        <StyleH4>Places to visit:</StyleH4>
        <ul>
          {city.place.map((place) => (
            <StyleList key={uuidv4()}>
              <StyleDiv>
                <StyleSpan>{place.name}</StyleSpan>
                <StyleSpan> {place.price} Euro</StyleSpan>
              </StyleDiv>
            </StyleList>
          ))}
          <StyleDiv>
            <StyleTotalPrice>Total Price:</StyleTotalPrice>
            <p>{totalPriceOfPlaces} Euro</p>
          </StyleDiv>
        </ul>
        <StyleH4>Food to try:</StyleH4>
        <ul>
          {city.food.map((food) => (
            <StyleList key={uuidv4()}>
              <StyleDiv>
                <StyleSpan>{food.name}</StyleSpan>
                <StyleSpan>{food.price} Euro</StyleSpan>
              </StyleDiv>
            </StyleList>
          ))}

          <StyleDiv>
            <StyleTotalPrice>Total Price:</StyleTotalPrice>
            <p>{totalPriceeOfFoods} Euro</p>
          </StyleDiv>
        </ul>
        <StyleDiv>
          <StyleTotalPrice>How much I spent on the trip:</StyleTotalPrice>
          <p>{totalPrice} Euro </p>
        </StyleDiv>
        <StyleH4>Notes:</StyleH4>
        <p>{city.note}</p>
      </StyleSection>
    </>
  );
}
