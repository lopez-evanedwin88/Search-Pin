export const getCities = (params: any) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f8859c392fmsh7e048825e18caa8p10f0c4jsn6524fdd4b8a7',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${params.name}`,
    options,
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};
