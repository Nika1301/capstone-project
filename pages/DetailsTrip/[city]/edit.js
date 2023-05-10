import { useRouter } from "next/router";
``;
import { useAppStore } from "@/lib/store";
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
import PlaceList from "@/src/components/PlaceList";
import FoodList from "@/src/components/FoodList";
import HotelList from "@/src/components/HotelList";
import Footer from "@/src/components/Footer/Footer";
export default function EditCity() {
  const router = useRouter();
  const cityId = router.query.city;
  const { updateHotels, updatePlaces, updateFood } = useAppStore();

  const city = useAppStore((state) => {
    const countries = state.countries;
    const cities = countries
      .map((country) =>
        country.cities.map((city) => ({
          ...city,
          country: country.country,
        }))
      )
      .flat();
    return cities.find((city) => city.id === cityId);
  });

  const { updateCity } = useAppStore();

  if (!city) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    updateCity(cityId, { ...data });
    event.target.reset();
    router.push(`/DetailsTrip/${city.id}`);
  }

  function handleHotelChange(newHotel) {
    updateHotels(cityId, newHotel);
  }

  function handlePlaceChange(newPlace) {
    updatePlaces(cityId, newPlace);
  }

  function handleFoodChange(newFood) {
    updateFood(cityId, newFood);
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
            <HotelList city={city} handleHotelChange={handleHotelChange} />
          </StyledDivSection>
        </StyledSection>

        <StyledSection>
          <StyledDivSection>
            <PlaceList city={city} handlePlaceChange={handlePlaceChange} />
          </StyledDivSection>
        </StyledSection>

        <StyledSection>
          <StyledDivSection>
            <FoodList city={city} handleFoodChange={handleFoodChange} />
          </StyledDivSection>
        </StyledSection>
        <StyledLabel htmlFor="notes">Notes:</StyledLabel>
        <StyledTextarea
          name="note"
          id="notes"
          cols="20"
          rows="10"
          defaultValue={city.note}
        ></StyledTextarea>

        <StyledButton type="submit">Save</StyledButton>
      </StyledFormContainer>
      <Footer />
    </>
  );
}
