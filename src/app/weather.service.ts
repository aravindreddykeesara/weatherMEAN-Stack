import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Userdata } from './userdata';

@Injectable()
export class WeatherService {
  result: any;
  /* tslint:disable */
  
  // tslint:disable-before-line:quotemark
  constructor( private _http: Http) { }

  getMainJsonData() {    
    return this._http.get('https://api.myjson.com/bins/14f6qa')
    .map(result => this.result =  result.json())
  }


  insertUser(userdata: Userdata){
     let headers = new Headers({'Content-Type': 'application/json'});
     let options = new RequestOptions({headers: headers});
     console.log('enetred insert user');
    return this._http.post('http://localhost:3000/api/addUser',JSON.stringify(userdata),options)
       .map(result => this.result = result.json());

  }





}
