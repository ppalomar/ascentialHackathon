import React, { useState } from 'react'; 

import { useCountriesWithData } from './API/mocks';

import CountryMap from './components/CountryMap';
import CountryDetails from './components/CountryDetails';

import './App.css';


function App() {
  const [{ loading, data: listOfCoutriesWithData }]  = useCountriesWithData();

  const [ selectedCountryCode, setSelectedCountryCode ] = useState();

  return (
    <div className="MainContainer">
      {loading && (
        <div className="la-ball-newton-cradle la-3x loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <CountryMap loading={loading} mapData={listOfCoutriesWithData} onClick={code => setSelectedCountryCode(code)} />
      {!loading && <CountryDetails selectedCountryCode={selectedCountryCode} />}
    </div>
  );
}

export default App;
