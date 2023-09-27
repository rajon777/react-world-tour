import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [counties, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlagas, setVisitedFlagas] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    const handlVisitedCountry = country =>{
        console.log('add this to your cidited country')
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }
    const handlVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlagas, flag];
        setVisitedFlagas(newVisitedFlags)

    }

    // remove item from an array ina state  use filter to select all  the elemnts except the one you want to remove 
    return (
        <div>
            <h3>Countries: {counties.length}</h3>
            {/* visited country */}

            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlagas.map(flag => <img src = {flag} alt=""></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    counties.map(country => <Country key={country.cca3}
                        handlVisitedCountry={handlVisitedCountry}
                        handlVisitedFlags={handlVisitedFlags}
                        country={country}>
                    </Country>)
                }
            </div>
        </div>
    )
}
export default Countries;