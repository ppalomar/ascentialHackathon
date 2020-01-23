export const useCountriesWithData = () => [
    {
      loading: false,
      data: ['ES', 'FR', 'BR'],
    },
  ];

export const useCountryDetails = () => [
    {
      loading: false,
      data: [{
          origin_lang: "Spainsh",
          translated_lang: "English",
          origin_text: "Hola",
          translated_text: "Hello",
      },{
        origin_lang: "Spainsh",
        translated_lang: "English",
        origin_text: "Adios",
        translated_text: "Bye",
    }],
    },
  ];