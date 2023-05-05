import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import Country from "@/src/components/Country/Country";

const StyledSection = styled.section`
  margin-top: 7rem;
  background-color: #cbf3f0;
`;
const StyledList = styled.li`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
const StyledButton = styled.button`
  position: fixed;
  color: yellow;
  background-color: #0d5c63;
  font-weight: bold;
  border-color: yellow;
  border-radius: 50%;
  font-size: 0.8em;
  padding: 0.8rem;
  bottom: 1rem;
  margin: 1rem;
  right: 1rem;
`;
import { useAppStore } from "@/lib/store";

export default function Countries() {
  const router = useRouter();
  const { countries } = useAppStore();
  const createCity = () => {
    router.push("/CreateCity");
  };

  return (
    <>
      <Header title="All Countries" />
      <StyledSection className="country">
        <ul>
          {countries.map((country) => {
            return (
              <li key={country.id}>
                <Country
                  nameOfCountry={country.country}
                  codeOfcountry={country.code}
                />
                <ul>
                  {country.cities.map((city) => (
                    <StyledList key={city.id}>
                      <Link href={`/DetailsTrip/${city.city}`}>{city.city}</Link>
                      <span>{city.startDate}</span>
                      <span>{city.endDate}</span>
                    </StyledList>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </StyledSection>
      <StyledButton onClick={createCity}>
        Create
        <br />
        City
      </StyledButton>
    </>
  );
}
