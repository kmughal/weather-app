export class WeatherDetail {
  constructor(
    public id:string,
    public title: string,
    public description: string,
    private iconName: string
  ) {}

  get icon() {
    return `http://openweathermap.org/img/w/${this.iconName}.png`;
  }
}
