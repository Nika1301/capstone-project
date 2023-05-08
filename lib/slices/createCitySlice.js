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
});
