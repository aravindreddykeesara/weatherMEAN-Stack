import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherCurrent } from '../weatherCurrent';
import { WeatherDaily } from '../weather-daily';
import { DISABLED } from '@angular/forms/src/model';
import { DataTransferService } from '../data-transfer.service';
import { CookieService } from 'ngx-cookie-service';

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

  
  currdata: WeatherCurrent ;
  dailyData: WeatherDaily[];
  favcitiesDisplay:any[] = [''];
  searchLocation : string = 'None';
  summaryForWeek : string;
  currrentTemp :number;
  currrentApptemp :number;
  UserEmailValue : string = '';
  tempHighLowCurrent: WeatherDaily;
  loginStatus : boolean = false;
  icons = new Skycons({ "color": "#000" });
  constructor(private _weatherservice: WeatherService, private datalog: DataTransferService,
    private cookieService: CookieService) { }


  ngOnInit() {
    this._weatherservice.getMainJsonData()
      .subscribe((res) => {
        this.currdata = res['currently'];
        this.currrentTemp = res['currently']['temperature'];
        this.currrentApptemp = res['currently']['apparentTemperature'];
        this.dailyData = res['daily']['data'].map(x => ({ ...x }));
        this.summaryForWeek = res['daily']['summary'];
        this.icons.add("curricon", this.currdata['icon']);
        this.icons.play();
        this.dailyData.forEach(value => {
          value['time'] = this.timeConverter(value['time']);
        });
      });

     this.datalog.userEvalue.subscribe(Evalue => this.UserEmailValue = Evalue); 
     this.datalog.currentStatus.subscribe(status => this.loginStatus = status);
     this.datalog.FavcitiesArrayValue.subscribe(favarray => this.favcitiesDisplay = favarray);
    }

  SearchValue(data){
    this._weatherservice.getLocationDataWithSearch(data).subscribe(result => {     
      this.searchLocation = result['results'][0]['formatted_address']
      this._weatherservice.getMainJsonWeatherForLocation(result['results'][0]['geometry']['location']['lat']
        , result['results'][0]['geometry']['location']['lng'])
        .subscribe((res) => {
          this.currdata = res['currently'];
          this.currrentTemp = res['currently']['temperature'];
          this.currrentApptemp = res['currently']['apparentTemperature'];
          this.summaryForWeek = res['daily']['summary'];
          this.dailyData = res['daily']['data'].map(x => ({ ...x }));
          this.icons.add("curricon", this.currdata['icon']);
          this.icons.play();
          this.dailyData.forEach(value => {
            value['time'] = this.timeConverter(value['time']);
          });
        });

    })
  }


  saveLocation(){ 
     this.favcitiesDisplay.push(this.searchLocation);
     this.favcitiesDisplay = this.removeDuplicates(this.favcitiesDisplay);
     this.cookieService.set('cookiedataFavcities', JSON.stringify(this.favcitiesDisplay));
     this._weatherservice.updateFavs(this.favcitiesDisplay, this.UserEmailValue).
     subscribe()

  }

  deleteFavs(i){
    this.favcitiesDisplay.splice(i,1);
    this.cookieService.set('cookiedataFavcities', JSON.stringify(this.favcitiesDisplay));
    this._weatherservice.updateFavs(this.favcitiesDisplay,this.UserEmailValue).
      subscribe()
  }

  removeDuplicates(favarray) {
    const temp = [];
    for (let i = 0; i < favarray.length; i++) {
      temp[favarray[i]] = true;
    }
    return Object.keys(temp);
  }

  

  timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var day = days[a.getDay()];
  return day;

  }
}
