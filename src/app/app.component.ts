import { Component, OnInit} from '@angular/core';
import { WeatherService} from './weather.service';
import {WeatherCurrent} from './weatherCurrent';
import {WeatherDaily} from './weather-daily';
declare var Skycons: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 /* tslint:disable */
export class AppComponent implements OnInit {

  ngOnInit() {
    
    }

}
