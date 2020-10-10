import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, flag, alpha3Code} = props.country;
    return (
        <div className="Coumtry">
            <p>{alpha3Code}</p>
            <h1>{name}</h1>
            <img src={flag} alt=""/>
            <br/>
            <Link to={`country/${name}`}>
            <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Country;