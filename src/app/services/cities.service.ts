import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private uri: string = 'https://countriesnow.space/api/v0.1/countries/cities';

  constructor(
    private httpClient: HttpClient
  ) {}

  public getCitiesList(country: string): any {
    return this.httpClient.post(`${this.uri}?`, { country });
  }
}
