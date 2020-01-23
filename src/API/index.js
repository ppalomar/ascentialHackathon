import useAxios from "axios-hooks";
const API_BASE_URL= 'http://localhost:8080/api/search';

export const useCountriesWithData = () => {
  return useAxios({
    url: `${API_BASE_URL}/WHATEVER HERE`,
    method: "GET",
    headers: {
    },
    params: {
    },
  });
};

export const useCountryDetails = selectedCountryCode => {
    return useAxios({
      url: `${API_BASE_URL}/translator`,
      method: "GET",
      headers: {
      },
      params: {
          global_customer_id: 1,
          report_date: '2020-01-23',
          country_code: selectedCountryCode,
      },
    });
  };