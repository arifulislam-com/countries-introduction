import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const first15 = data.slice(0,15);
            setCountries(first15);
        })
    },[])
    return (
        <div>
            {
                countries.map(country => <Country key={country.name} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;