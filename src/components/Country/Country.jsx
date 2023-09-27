import { useState } from 'react';
import '../css/country.css'
// import CountryDetelies from '../CountryDetelis/CountryDetelies';
const Country =({country, handlVisitedCountry, handlVisitedFlags}) => {
    const {name, flags, cca3, population,} = country;

    const [visited, setVisited] = useState(false);
    const handlVisited = () =>{
        setVisited(!visited); 
    }
    const passWithPaarmas = () =>{
        handlVisitedCountry(country)
    }
    
    return(
        <div className={`country ${visited ? 'visited' : 'white'}`}>
            <h4 style={{color: visited ? 'green' : 'purple'}}>Name: {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Area: {country.area}</p>
            <p>Population:{population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => passWithPaarmas(country)}>Mark Visited</button>
            <br/>
            <button onClick={() =>handlVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={handlVisited} className='btn btn'>{visited ? 'Visited' : 'Going'}</button>
            { visited ? 'I have visited this country' : 'I want to a vist'}
            <hr />
            {/* <CountryDetelies>
            
                country={country}
                handlVisitedCountry={handlVisitedCountry}
                handlVisitedFlags={handlVisitedFlags}
            

            </CountryDetelies> */}
        </div>
    )
}
export default Country;