import { countries } from "../db";
import { v4 as uuidv4 } from "uuid";

export const createCitySlice = (set, get) => ({
  countries,
  addCity: (formData) => {
    const { city, countryID, startDate, endDate, note, hotels, places, food } =
      formData;
    set((state) => ({
      countries: state.countries.map((country) => {
        if (country.id === countryID) {
          return {
            ...country,
            cities: [
              ...country.cities,
              {
                city,
                startDate,
                endDate,
                hotels,
                places,
                food,
                note,
                id: uuidv4(),
              },
            ],
          };
        }
        return country;
      }),
    }));
  },
  findCityByID: (cityID) => {
    const countries = get().countries;
    const cities = countries
      .map((country) =>
        country.cities.map((city) => ({ ...city, country: country.country }))
      )
      .flat();
    return cities.find((city) => city.id === cityID);
  },

  deleteCity: (cityID) => {
    set((state) => ({
      countries: state.countries.map((country) => {
        const newCities = country.cities.filter((city) => city.id !== cityID);
        return { ...country, cities: newCities };
      }),
    }));
  },
  updateCity: (cityID, updatedCityData) => {
    set((state) => ({
      countries: state.countries.map((country) => {
        const newCities = country.cities.map((city) => {
          if (city.id === cityID) {
            return {
              ...city,
              ...updatedCityData,
            };
          }
          return city;
        });

        return { ...country, cities: newCities };
      }),
    }));
  },
  updateHotels: (cityID, hotel) => {
    set((state) => ({
      countries: state.countries.map((country) => {
        const newCities = country.cities.map((city) => {
          if (city.id === cityID) {
            const isHotelNew = !city.hotels.find((h) => h.id === hotel.id);
            const hotels = isHotelNew
              ? [...city.hotels, hotel]
              : city.hotels.map((h) => (h.id === hotel.id ? hotel : h));

            return {
              ...city,
              hotels,
            };
          }
          return city;
        });

        return { ...country, cities: newCities };
      }),
    }));
  },
  updatePlaces: (cityID, place) => {
    set((state) => ({
      countries: state.countries.map((country) => {
        const newCities = country.cities.map((city) => {
          if (city.id === cityID) {
            const isPlaceNew = !city.places.find((p) => p.id === place.id);
            const places = isPlaceNew
              ? [...city.places, place]
              : city.places.map((p) => (p.id === place.id ? place : p));

            return {
              ...city,
              places,
            };
          }
          return city;
        });

        return { ...country, cities: newCities };
      }),
    }));
  },
  updateFood: (cityID, meal) => {
    set((state) => ({
      countries: state.countries.map((country) => {
        const newCities = country.cities.map((city) => {
          if (city.id === cityID) {
            const isFoodNew = !city.food.find((f) => f.id === meal.id);
            const food = isFoodNew
              ? [...city.food, meal]
              : city.food.map((f) => (f.id === meal.id ? meal : f));

            return {
              ...city,
              food,
            };
          }
          return city;
        });

        return { ...country, cities: newCities };
      }),
    }));
  },
  removeHotel: (cityID, hotelID) => {
    set((state) => ({
      countries: state.countries.map((country) => {
        const newCities = country.cities.map((city) => {
          if (city.id === cityID) {
            const hotels = city.hotels.filter((hotel) => hotel.id !== hotelID);
            if (hotels.length === 0) {
              hotels.push({ id: uuidv4(), hotel: "", hotelPrice: "" });
            }
            return {
              ...city,
              hotels,
            };
          }
          return city;
        });

        return { ...country, cities: newCities };
      }),
    }));
  },
});
