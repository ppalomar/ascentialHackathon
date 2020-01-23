export const useCountriesWithData = () => [
    {
      loading: false,
      data: ['ES', 'FR', 'BR', 'IT', 'CN'],
    },
  ];

export const useCountryDetails = code => {
    const data = [{
        source: "Televisor de alta resolucion",
        target: "High resolution TV",
        score: 88,
        code: 'ES',
    },{
        source: "Ordenador Portatil",
        target: "Laptop",
        score: 40,
        code: 'ES',
    },{
        source: "Frigorifero",
        target: "Fridge",
        score: 88,
        code: 'IT',
    },{
        source: "Cravatta nera",
        target: "Black tie",
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