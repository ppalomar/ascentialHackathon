export const useCountriesWithData = () => [
    {
      loading: false,
      data: ['ES', 'FR', 'BR', 'IT'],
    },
  ];

export const useCountryDetails = code => {
    const data = [{
        source: "Hola",
        target: "Hello",
        score: 88,
        code: 'ES',
    },{
        source: "Adios",
        target: "Bye",
        score: 40,
        code: 'ES',
    },{
        source: "Ciao",
        target: "Hello",
        score: 88,
        code: 'IT',
    },{
        source: "Buona Fortuna",
        target: "Good Luck",
        score: 40,
        code: 'IT',
    }];

    const response = [
        {
            loading: false,
            data: data.filter(d => d.code === code),
        }
    ];

    return response;
};