import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherCurrent } from '../weatherCurrent';
import { WeatherDaily } from '../weather-daily';
import { DISABLED } from '@angular/forms/src/model';
declare var Skycons: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/* tslint:disable */
export class HomeComponent implements OnInit {

  title = 'app';
  classname = 'icon1';
  currdata: Array<WeatherCurrent>;
  dailyData: WeatherDaily[];
  icons = new Skycons({ "color": "#000" });
  constructor(private _weatherservice: WeatherService) { }

  ngOnInit() {
    this._weatherservice.getMainJsonData()
      .subscribe((res) => {
        this.currdata = res['currently'];
        this.dailyData = res['daily']['data'].map(x => ({ ...x }));
        this.icons.add("curricon", this.currdata['icon']);
        this.icons.play();
        this.dailyData.forEach(value => {
          value['time'] = timeConverter(value['time']);
        });

      });

    function timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1000);
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var day = days[a.getDay()];
      return day;
    }

  }
}
