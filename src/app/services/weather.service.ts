import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = environment.openWeatherApiKey;
  private system: string = 'metric';
  private uri: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(
    private httpClient: HttpClient
  ) {
    this.uri = `${this.uri}?appid=${this.apiKey}&units=${this.system}`;
  }

  public getWeather(city: string): any {
    return this.httpClient.get(`${this.uri}&q=${city}`);
  }
}
