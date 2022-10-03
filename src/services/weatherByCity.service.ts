import { CityNameWeatherModel } from '../models/cityNameWeather.model';
import { CityWeatherModel } from '../models/cityWeather.model';
import {
  fromObject,
  fromObjectRecursive,
  Observable,
  PropertyChangeData,
} from 'tns-core-modules/data/observable';

class _WeatherByCityService {
  private allWeather: CityNameWeatherModel[] = [];

  async addACityWeather(
    latitude: number,
    longitude: number,
    nameCity: string
  ): Promise<void> {
    let urlGetWeatherForecast: string =
      'https://api.darksky.net/forecast/e1ad16a2b7ba4b82167cb140f8b17640/' +
      latitude +
      ',' +
      longitude;

    let cityExisting: CityNameWeatherModel | undefined = this.allWeather.find(
      (weather) => weather.cityName === nameCity
    );
    let res: CityWeatherModel = {};
    if (cityExisting === undefined) {
      const cityWeatherWithName: CityNameWeatherModel = {
        cityName: nameCity,
        forecastWeather: res,
      };
      this.allWeather.push(cityWeatherWithName);
    } else {
      cityExisting.forecastWeather = res;
    }
  }

  getAllWeather(): CityNameWeatherModel[] {
    return this.allWeather;
  }

  getWeatherByCityName(cityName: string): CityNameWeatherModel | undefined {
    return (
      this.allWeather.find((weather) => weather.cityName === cityName) ||
      undefined
    );
  }
}

export const WeatherByCityService = new _WeatherByCityService();
