import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  weatherData: any;
  error: string = '';
  city: string = ''; // Define the city variable here

  constructor(private weatherService: WeatherService) {}

  searchWeather() { // Remove the city parameter from the function
    this.weatherService.getWeatherData(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.error = ''; // Clear any previous error
      },
      (error) => {
        this.weatherData = null;
        this.error = 'City not found'; // Display error message
      }
    );
  }







  // cityName: string | undefined;
  // weatherData: any; // Store the fetched weather data here
  // temperatureUnit: string | undefined;

  // constructor(private http: HttpClient) {}

  // getWeatherForecast() {
  //   const apiKey = 'YOUR_API_KEY';
  //   const unit = this.temperatureUnit === 'imperial' ? 'imperial' : 'metric';
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apiKey}`;
  

  //   this.http.get(apiUrl).subscribe(
  //     (data: any) => {
  //       this.weatherData = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching weather data:', error);
  //       this.handleError(error);
  //     }
  //   );
  // }
  
  // handleError(error: any) {
  //   // Handle errors here, e.g., display an error message to the user
  //   if (error.status === 404) {
  //     alert('City not found. Please enter a valid city name.');
  //   } else {
  //     alert('An error occurred while fetching weather data. Please try again later.');
  //   }
  }



