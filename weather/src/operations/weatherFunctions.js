import 'dotenv/config';

const { WEATHER_API_PUBKEY, IPINFO_API_PUBKEY } = process.env;

async function getCurrentCity () {
  try {
    const request = await fetch(`https://ipinfo.io/json?token=${IPINFO_API_PUBKEY}`, {mode: 'cors'});
    const response = await request.json();

    return response.city;

  } catch (err) {

    return { err };
  }
}

/**
 * 
 * @param { string } place 
 * @returns Object -> contains the location and current weather
 */
export default async function GetWeather(place = null){
  let currentCity;
  if (place === null) currentCity = await getCurrentCity();
  if (!currentCity) currentCity = place;

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_PUBKEY}&q=${currentCity}&aqi=no`, {
      mode: 'cors',
    });    
    const { location, current } = await response.json();
    return { location, current };

  } catch (err) {
    
    return { err };
  }
}