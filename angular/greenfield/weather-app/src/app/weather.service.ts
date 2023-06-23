import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class WeatherService {
private apiKey = '2ddeb1210a5446216a1bfe1e57965d87';

constructor(private http: HttpClient) { }

getWeather(city: string) {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
return this.http.get(apiUrl);
}
}
