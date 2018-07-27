import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Userdata } from './userdata';

@Injectable()
export class WeatherService {
  result: any;
  /* tslint:disable */
  
  // tslint:disable-before-line:quotemark
  constructor( private _http: Http) { }

  getMainJsonData() {    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.get('https://api.myjson.com/bins/1duul2', { headers: headers })
    .map(result => this.result =  result.json())
  }

  getMainJsonWeatherForLocation(Lat: string, Lng:string){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.get(proxy+'https://api.darksky.net/forecast/b31842087a43daae758e6406294eb85f/'+Lat+','+ Lng
      + '?exclude=minutely,hourly,flags', { headers: headers })
      .map(result => this.result = result.json())
  }

  getLocationDataWithSearch( searchWord: string){

    return this._http.get(' https://maps.googleapis.com/maps/api/geocode/json?address=' + searchWord + '&key=AIzaSyCTTFoln_s48ACxp66aryb1vnRLLj_c2Eg')
      .map(result => this.result = result.json())
  }

  updateFavs(favcities:any[],userEmailValue){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('enetred update favs city');
    let UpdateInfo: any = { 
       "favcitiesvalue" : favcities,
       "userEmailValue" : userEmailValue
    }

    return this._http.post('/api/UpdateFavorites', UpdateInfo, options)
      .map(result => this.result = result.json())
  }




  insertUser(userdata: Userdata){
     let headers = new Headers({'Content-Type': 'application/json'});
     let options = new RequestOptions({headers: headers});
     console.log('enetred insert user');
    return this._http.post('/api/addUser',JSON.stringify(userdata),options)
       .map(result => this.result = result.json())
  }

  checkLoginUser(userdata: Userdata) {
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let params = new HttpParams()
   .set("userEmail",userdata.userEmail).set("password", userdata.password); //Create new HttpParams
    console.log('enetred insert user');
    return this._http.get('/api/loginUser', { headers: headers, params: params })
      .map(result => this.result = result.json());
    
  }



//    let headers = new Headers({ 'Content-Type': 'application/json' });
//    let params = new HttpParams()
//   .set("userEmail", userdata.userEmail).set("password", userdata.password); //Create new HttpParams
// console.log('enetred insert user');
// return this._http.get('/api/loginUser', { headers: headers, params: params })
//   .map(result => this.result = result.json());




}
