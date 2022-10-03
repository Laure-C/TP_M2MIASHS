import { CityWeatherDetailsModel } from './cityWeatherDetails.model';

export interface CityWeatherModel {
  latitude: number;
  longitude: number;
  timezone: String;
  currently: CityWeatherDetailsModel;
  hourly: {
    summary: String;
    icon: String;
    data: CityWeatherDetailsModel[];
  };
  daily: {
    summary: String;
    icon: String;
    data: CityWeatherDetailsModel[];
  };
  flags: {
    sources: String[];
    'meteoalarm-license': String;
    'nearest-station': number;
    units: String;
  };
  offset: number;
}
