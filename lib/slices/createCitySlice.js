import { countries } from "../db";

import { v4 as uuidv4 } from "uuid";
export const createCitySlice = (set) => ({
  countries,
  addCity: (FormData) => {
    const { city, country, startDate, endDate, note, hotels, places, food} = FormData;
    set((state) => ({
      countries: state.countries.map((_country) => {
        if (_country.id === country) {
          return {
            ..._country,
            cities: [
              ..._country.cities,
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

        return _country;
      }),
    }));
  },
 
});
