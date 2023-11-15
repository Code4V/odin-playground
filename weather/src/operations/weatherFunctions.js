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

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_PUBKEY}&q=${currentCity}&aqi=no`, {
      mode: 'cors',
    });    
    
    const { location, current } = await response.json();

    return { 
      cityName: location.name, 
      tempIcon: current.condition.icon,
      temp: current.temp_c,
      temp_f: current.temp_f,
    };

  } catch (err) {
    
    return { err };
  }
}