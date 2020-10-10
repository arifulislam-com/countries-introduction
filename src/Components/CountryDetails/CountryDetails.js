import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    console.log(countryName);
    return (
        <div>
            <h1>This is Conumtry Details{countryName}</h1>
        </div>
    );
};

export default CountryDetails;