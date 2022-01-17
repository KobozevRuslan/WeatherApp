import axios from 'axios';

const API_KEY = 'd6487c851d4294ca86263fcb2861f71f';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

export class ApiWeatherService {
  static fetchData = async (city) => {
    try {
      const { data } = await axios.get(URL, {
        params: {
          q: city,
          units: 'metric',
          APPID: API_KEY,
        },
      });
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  };
}
