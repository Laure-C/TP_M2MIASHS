import { CityWeatherModel } from './cityWeather.model';

export interface CityNameWeatherModel {
  cityName: string;
  forecastWeather: CityWeatherModel;
}
