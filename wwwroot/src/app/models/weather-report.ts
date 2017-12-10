import { Coord } from "./coord";
import { Weather } from "./weather";
import { Overview } from "./overview";
import { Wind } from "./wind";
import { Cloud } from "./cloud";
import { SystemData } from "./system-data";
import { Helpers } from "../common/helpers";

export class WeatherReport {
  constructor(
    public coord: Coord = null,
    public weather: Weather[] = null,
    public base: string = null,
    public main: Overview = null,
    public visibility: number = 0,
    public wind: Wind = null,
    public clouds: Cloud = null,
    public dt: number = 0,
    public sys: SystemData = null,
    public id: number = 0,
    public name: string = null,
    public cod: number = 0
  ) {}

}

