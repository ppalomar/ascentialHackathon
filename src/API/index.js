import useAxios from "axios-hooks";

const API_BASE_URL= '';

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

export const useCountryDetails = () => {
    return useAxios({
      url: `${API_BASE_URL}/WHATEVER HERE`,
      method: "GET",
      headers: {
      },
      params: {
      },
    });
  };