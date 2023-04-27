import Link from "next/link";
import styled from "styled-components";
import Header from "@/src/components/Header/Header";
import Country from "@/src/components/Country/Country";
import { countries } from "@/lib/db";

const StyleSection = styled.section`
  margin-top: 7rem;
  background-color: #cbf3f0;
`;
const StyleList = styled.li`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
export default function Countries() {
  return (
    <>
      <Header title="All Countries" />
      <StyleSection className="country">
        <ul>
          {countries.map((country) => {
            return (
              <li key={countries.id}>
                <Country
                  nameOfCountry={country.name}
                  codeOfcountry={country.code}
                />

                <ul>
                  {country.cities.map((city) => (
                    <StyleList key={city.name}>
                      <Link href={`/DetailsTrip/${city.name}`}>
                        {city.name}
                      </Link>
                      <span>{city.startDate}</span>
                      <span>{city.endDate}</span>
                    </StyleList>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </StyleSection>
    </>
  );
}
