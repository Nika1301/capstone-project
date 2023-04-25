export default function Country({ nameOfCountry, codeOfcountry, nameOfCity }) {
  return (
    <>
      <li>
        {nameOfCountry} - {codeOfcountry}
      </li>
      <div className="city">{nameOfCity}</div>
    </>
  );
}
