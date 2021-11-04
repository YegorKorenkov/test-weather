export type WeatherData = {
  dt_txt: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
};

export interface FetchedWeatherModel {
  city: {
    name: string;
  };
  list: WeatherData[];
}

export interface SeriallizedWeatherModel {
  day: string;
  city: string;
  data: WeatherData[];
}

export interface CurrentWeatherModel {
  city: string;
  day: string;
  data: WeatherData;
}
