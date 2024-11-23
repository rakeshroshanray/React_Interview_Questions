import React from 'react';
import{useState,useEffect} from 'react';
import axios from 'axios';

function XCountries() {
const[countries, setCountries] = useState([])
const [error,setError] = useState(null);

useEffect(() =>{
    const fetchCountries = async () => {
        try{
            const res = await axios.get("https://xcountries-backend.azurewebsites.net/all")
            setCountries(res.data)
        }
        catch(err){
            console.log("Failed to fetch countries",err.message)
            setError(err.message)

        }
    }
    fetchCountries();
},[]);

return(
    <div>
        <h1>Countries with their Flags & Names</h1>
        {error?(
            <p>Error fetching data : {error}</p>
        ):(
            <div>
           { countries.map((country) => (
                <div>
                    <img src={country.flag}
                    alt={` Flag of ${country.name}` }/>
                    <p>{country.name}</p>
                </div>

            ))}
        </div>
        )}
    </div>
)
}

export default XCountries;
