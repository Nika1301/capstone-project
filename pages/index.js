import Link from "next/link";
import styled from "styled-components";
import Header from "@/src/components/Header/Header";
import Country from "@/src/components/Country/Country";
import { countries } from "@/lib/db";

const Stylemain = styled.main`
  margin-top: 7rem;
  background-color: #cbf3f0;
`;

export default function Countries() {
  return (
    <Stylemain>
      <Header title="All Countries" />
      <div className="country">
        {countries.map((country) => {
          return (
            <ul key={countries.id}>
              <Country
                nameOfCountry={country.name}
                codeOfcountry={country.code}
              />
              <ol>
                {country.cities.map((city) => (
                  <ol key={city}>
                    <Link href={`/DetailsTrip/`}>{city}</Link>
                  </ol>
                ))}
              </ol>
            </ul>
          );
        })}
      </div>
    </Stylemain>
  );
}
