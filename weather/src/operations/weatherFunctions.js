import 'dotenv/config';

const { WEATHER_API_PUBKEY, IPINFO_API_PUBKEY } = process.env;

async function getCurrentCity () {
  try {
    const request = await fetch(`https://ipinfo.io/json?token=${IPINFO_API_PUBKEY}`, {mode: 'cors'});
    const response = await request.json();

    return response.city;

  } catch (err) {

    console.log(err)

    return 'Manila';
  }
}

function queryBuilder (query = {method: 'current.json', q: '', days: undefined, dt: undefined, aqi: 'no'}) {
  let weatherAPIBase = 'https://api.weatherapi.com/v1/';

  weatherAPIBase = weatherAPIBase + query.method + '?';

  Object.entries(query).forEach((entries, index) => {
    if (entries[1] === '' || entries[1] === undefined || entries[1] === null || index === 0) return;

  

    weatherAPIBase = weatherAPIBase + entries[0] + '=' + entries[1].toString().replace(' ', '%20') + '&';
  });

  weatherAPIBase = weatherAPIBase + 'key=' + WEATHER_API_PUBKEY;

  console.log(weatherAPIBase);

  return weatherAPIBase;
}

/**
 * 
 * @param { string } place -> gets the Current City if the place param is empty
 * @returns Object -> contains the location and current weather
 */
export default async function GetWeather(place = null){
  let currentCity;

  try {
    if (place === null) currentCity = await getCurrentCity();
    if (!currentCity) currentCity = place;

    const response = await fetch(queryBuilder({method: 'current.json', q: currentCity}), {
      mode: 'cors',
    });    

    if (response.status >= 400) throw new Error('Something Went Wrong!')
    console.log(response.status)
    const { location, current } = await response.json();

    console.table(location);

    console.table(current)

    return { 
      cityName: location.name, 
      country: location.country,
      tempIcon: current.condition.icon,
      temp: current.temp_c,
      temp_f: current.temp_f,
      feelslike: current.feelslike_c,
      feelslike_f: current.feelslike_f,

      lastUpdated: current.last_updated,
    };

  } catch (err) {
    
    return { 
      messsage: err,
    };
  }
}

export async function GetForecast() {
  try {
    const response = await fetch(queryBuilder({method: 'forecast.json', q: 'Quezon City', days: 7}));

    const { forecast, location } = await response.json();

    console.log(forecast)

    const forecastArray = [];
    forecast.forecastday.forEach(day => {
      forecastArray.push({
        date: day.date,
        tempIcon: day.day.condition.icon,
        temp: day.day.avgtemp_c,
        temp_f: day.day.avgtemp_f,
        mintemp: day.day.mintemp_c,
        mintemp_f: day.day.mintemp_f,
        maxtemp: day.day.maxtemp_c,
        maxtemp_f: day.day.maxtemp_f,
      });
    })

    return { 
      cityName: location.name, 
      country: location.country,
      forecast: forecastArray,
    };

  } catch ( err ) {

  }
}

console.log(await GetForecast());