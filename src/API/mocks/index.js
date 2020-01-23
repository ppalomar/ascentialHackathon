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
        score: 100,
        code: 'IT',
    },{
        source: "Cravatta nera",
        target: "Black tie",
        score: 90,
        code: 'IT',
    },{
        source: "蓝色T恤",
        target: "Blue t-shirt",
        score: 66,
        code: 'CN',
    },{
        source: "螺丝刀",
        target: "Screwdriver",
        score: 87,
        code: 'CN',
    }];

    const response = [
        {
            loading: false,
            data: data.filter(d => d.code === code),
        }
    ];

    return response;
};