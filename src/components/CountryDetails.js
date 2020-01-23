import React from 'react';

import { useCountryDetails } from '../API/mocks';

import { COUNTRIES_ISO } from '../constants/countries';

import Table from './Table';

import './CountryDetails.css';

const CountryDetails = ({ selectedCountryCode }) => {
    const [{ loading, data }]  = useCountryDetails();

    if(!selectedCountryCode) {
        return <div className="pick">
            Pick a country from the map
            </div>;
    };

    return (
        <div className='container'>
            <h1>
                {COUNTRIES_ISO[selectedCountryCode]}
            </h1>
            <div className="detailsContainer">
                <Table loading={loading} data={data}/>
            </div>
        </div>  
    );
};

export default CountryDetails;

