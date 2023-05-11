import styled from "styled-components";
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import Country from "@/src/components/Country/Country";
import Footer from "@/src/components/Footer/Footer";
const StyledSection = styled.section`
  margin-top: 7rem;
  background-color: #cbf3f0;
  margin-bottom: 5rem;
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
  color: #cbf3f0;
  background-color: #0d5c63;
  font-weight: bold;
  border-radius: 999px;
  font-size: 0.8em;
  padding: 1rem 0.6rem;
  bottom: 58px;
  right: 10px;
  text-decoration: none;
  text-align: center;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
  &:hover {
    color: #063539;
    background-color: #2ec4b6;
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
      <Footer />
    </>
  );
}
