import React, { useEffect, useState } from "react";
import axios from "axios";

function XCountriesSelect() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        setCountries(res.data);
      } catch (err) {
        console.log("failed to get countries", err.message);
        setError(err.message);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountry = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Countries with Flag</h1>
      <div>
        <input
          type="text"
          placeholder="Search for countries"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

        {error?(
            <p>Error fetching country:{error}</p>
        ):(
            <div>
                {filteredCountry.map((country) =>
                <div >
                    <img src={country.flag} alt={country.name} />
                    <h3>{country.name}</h3>
                </div>
                )}
            </div>
        )}

    </div>
  );
}
export default XCountriesSelect;
