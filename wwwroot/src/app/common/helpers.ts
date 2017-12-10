import {WeatherReport} from '../models/weather-report';
import {WeatherReportViewModel} from '../viewmodel/weather-report-view-model';
import {WeatherDetail} from '../viewmodel/weather-detail';

export class Helpers {
  static convertUnixTicksToDateObject(ticks: number): string {
    const dObject = new Date(1000 * ticks);
    return Helpers.getTimeStampString(dObject);
  }

  static convertTemperaturekelvinToCelcius = (val: number) => val - 273.15;

  static materializeViewModel(
    weatherReport: WeatherReport
  ): WeatherReportViewModel {
    const vm: WeatherReportViewModel = new WeatherReportViewModel();

    vm.city = weatherReport.name;
    vm.country = weatherReport.sys.country;
    vm.cloudPercentage = weatherReport.clouds.all;

    vm.details = new Array<WeatherDetail>();
    for (const item of weatherReport.weather) {
      let {description, icon, main, id} = item;
      vm.details.push(new WeatherDetail(id, main, description, icon));
    }
    vm.lat = weatherReport.coord.lat;
    vm.lon = weatherReport.coord.lon;
    [
      vm.temperatureInKelvin,
      vm.maxTemperatureInKelvin,
      vm.minTemperatureInKelvin,
    ] = [
      weatherReport.main.temp,
      weatherReport.main.temp_max,
      weatherReport.main.temp_min,
    ];

    vm.sunriseTicks = weatherReport.sys.sunrise;
    vm.sunsetTicks = weatherReport.sys.sunset;

    return vm;
  }

  private static getTimeStampString(dateObject: Date): string {
    if (!dateObject) {
      throw new Error('dObject is a required paramter.');
    }
    return `${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
  }
}
