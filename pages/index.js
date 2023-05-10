import styled from "styled-components";
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
  line-height: 1.6;
`;
const StyledDate = styled.span`
  font-size: 0.8em;
`;
const StyledLinkCity = styled(Link)`
  text-decoration: none;
  color: #0d5c63;
  &:hover {
    color: #2986cc;
  }
`;
const StyledLink = styled(Link)`
  position: fixed;
  color: yellow;
  background-color: #0d5c63;
  font-weight: bold;
  border: solid;
  border-color: yellow;
  border-radius: 50%;
  font-size: 0.8em;
  padding: 0.8rem;
  bottom: 0.2rem;
  margin: 1rem;
  right: 0.5rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #0d5c63;
    background-color: yellow;
    border-color: #0d5c63;
  }
  &:active {
    transform: scale(0.95);
  }
`;
import { useAppStore } from "@/lib/store";

export default function Countries() {
  const { countries } = useAppStore();
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
                {country.cities.length > 0 && (
                  <ul>
                    {country.cities.map((city) => (
                      <StyledList key={city.id}>
                        <StyledLinkCity href={`/DetailsTrip/${city.id}`}>
                          {city.city}
                        </StyledLinkCity>
                        {city.startDate && city.endDate ? (
                          <StyledDate>
                            {city.startDate} - {city.endDate}
                          </StyledDate>
                        ) : null}
                      </StyledList>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </StyledSection>

      <StyledLink href="/CreateCity">
        Create
        <br />
        City
      </StyledLink>
    </>
  );
}
