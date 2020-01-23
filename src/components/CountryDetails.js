import React from 'react';

import { useCountryDetails } from '../API/mocks';

import { COUNTRIES_ISO } from '../constants/countries';

import Table from './Table';

import './CountryDetails.css';

const CountryDetails = ({ selectedCountryCode }) => {
    const [{ loading, data }]  = useCountryDetails();
    
    return (
        <div className='container'>
            {!selectedCountryCode ? (
                <div className="pick">
                    Pick a country from the map
                </div>
            ) : (
            <>
                <h1>
                    {COUNTRIES_ISO[selectedCountryCode]}
                </h1>
                <div className="detailsContainer">
                    <Table loading={loading} data={data}/>
                </div>
            </>
            )}
        </div>  
    );
};

export default CountryDetails;

