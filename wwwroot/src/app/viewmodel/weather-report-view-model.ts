import {Helpers} from '../common/helpers';
import {WeatherDetail} from './weather-detail';

export class WeatherReportViewModel {
  country: string;
  city: string;
  details: WeatherDetail[];
  sunsetTicks: number;
  sunriseTicks: number;
  temperatureInKelvin: number;
  maxTemperatureInKelvin: number;
  minTemperatureInKelvin: number;
  cloudPercentage: number;
  lat: number;
  lon: number;

  get sunrise(): string {
    return Helpers.convertUnixTicksToDateObject(this.sunriseTicks);
  }

  get sunset(): string {
    return Helpers.convertUnixTicksToDateObject(this.sunsetTicks);
  }

  get maxTemperature(): number {
    return Helpers.convertTemperaturekelvinToCelcius(
      this.maxTemperatureInKelvin
    );
  }

  get minTemperature(): number {
    return Helpers.convertTemperaturekelvinToCelcius(
      this.minTemperatureInKelvin
    );
  }

  get temperature(): number {
    return Helpers.convertTemperaturekelvinToCelcius(this.temperature);
  }
}
