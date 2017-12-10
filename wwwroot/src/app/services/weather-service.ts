import {Ajax} from '../common/ajax';
import {WeatherReport} from '../models/weather-report';

export class WeatherService {
  async get(city: string) {
    if (!city) {
      throw new Error("Country can't be null or empty.");
    }

    const url: string = 'http://localhost:5000/mock/api-response.json';
    const result: WeatherReport = <WeatherReport>await Ajax.json(url);
    return result;
  }
}

//url = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=<<provide_id>>";
//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=<<provide_id>>`
