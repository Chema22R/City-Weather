import { Component } from '@angular/core';

import { CitiesService } from './services/cities.service';
import { WeatherService } from './services/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private country: string = 'Spain';

    public cities: Array<string> = [];
    public weather: any = {};

    constructor(
        private citiesService: CitiesService,
        private weatherService: WeatherService
    ) { }

    ngOnInit(): void {
        this.citiesService.getCitiesList(this.country).subscribe(
            (res: any) => {
                if (res.error) {
                    console.error(res.error);
                } else {
                    this.cities = res.data;
                }
            },
            (err: any) => console.error(err)
        );
    }

    public getWeather(city: string): void {
        this.weatherService.getWeather(city).subscribe(
            (res: any) => {
                res.main.temp = Math.round(res.main.temp);
                res.main.temp_max = Math.round(res.main.temp_max);
                res.main.temp_min = Math.round(res.main.temp_min);

                this.weather[city] = res;
            },
            (err: any) => console.error(err)
        );
    }
}
