import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { WeatherService} from '../weather.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import { Userdata } from '../userdata';
import { DataTransferService} from '../data-transfer.service';
import { CookieService } from 'ngx-cookie-service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
/* tslint:disable */
export class NavbarComponent implements OnInit {

   rForm: FormGroup;
   userlogdata: Userdata = { userEmail:'',password:'',favcities:['']};
   data:any;
   emailid:string='';
   password:string = '';
   emailValidAlert:string = 'This field is required';
   loginStatus:boolean= false;


  constructor(private _weatherService: WeatherService, private datalog: DataTransferService, fb: FormBuilder, private router: Router
    , private cookieService: CookieService, private _flashMessagesService: FlashMessagesService) {      
    this.rForm = fb.group({
      'emailid': [null, Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])],
      'password':[null,Validators.compose([Validators.required,Validators.minLength(4)])]
    });
   }

   addUser(data){
     this.userlogdata.userEmail = data.emailid;
     this.userlogdata.password = data.password;
     this._weatherService.insertUser(this.userlogdata).subscribe(data =>{
     
        if(data['userEmail']!=null){

          this.loginStatus = true;
          this.datalog.loginStatusMethod(this.loginStatus);
          this.datalog.userDataMethod(this.userlogdata.userEmail);
          this.datalog.favcitiesMethod(data['favcities']);
          this.userlogdata.favcities = data['favcities'];
          this.cookieService.set('cookiedataLoginStatus', 'true');
          this.cookieService.set('cookiedatauserdata', this.userlogdata.userEmail);
          this.cookieService.set('cookiedataFavcities', JSON.stringify(this.userlogdata.favcities));

          this._flashMessagesService.show('Registration Sucess !!!', { cssClass: 'alert-success', timeout:4000 });
          window.location.reload();
          
        }
        else {
          this._flashMessagesService.show('Failed! User Exists! or Try again!', { cssClass: 'alert-danger', timeout: 4000 });
           // no refresh
        }
     }); 
   }

   checkLogin(data){
    
     this.userlogdata.userEmail = data.emailid;
     this.userlogdata.password = data.password;
     this._weatherService.checkLoginUser(this.userlogdata).subscribe(data => {
      
       if (data[0]!=null && !this.loginStatus){
         this.loginStatus = true;
         this.datalog.loginStatusMethod(this.loginStatus);
         this.datalog.userDataMethod(this.userlogdata.userEmail);
         this.datalog.favcitiesMethod(data[0]['favcities']);
         this.userlogdata.favcities = data[0]['favcities'];
         this.cookieService.set('cookiedataLoginStatus', 'true');
         this.cookieService.set('cookiedatauserdata', this.userlogdata.userEmail);
         this.cookieService.set('cookiedataFavcities',JSON.stringify(this.userlogdata.favcities));
         window.location.reload();
      
       } else if (data[0] != null && this.loginStatus){
         this._flashMessagesService.show('something is wrong! try again!', { cssClass: 'alert-danger', timeout: 4000 });
         //set a flash message that user is already logged in

       } else{
         this._flashMessagesService.show('Check credentials! try again!', { cssClass: 'alert-danger', timeout: 4000 });
           // no refresh
      }
  
     }); 
     
   }

   logoutUser(){

     this.userlogdata.userEmail = '';
     this.userlogdata.password = '';
     this.loginStatus = false;
     this.datalog.loginStatusMethod(this.loginStatus);
     this.datalog.userDataMethod('');
     this.cookieService.set('cookiedataLoginStatus', 'false');
     this.cookieService.deleteAll('cookiedatauserdata');
     this.cookieService.deleteAll('cookiedataFavcities');

     this._flashMessagesService.show('Logout Sucess !!!', { cssClass: 'alert-success', timeout: 4000 });
     window.location.reload();



   }

SignUpShow(){

  $(function (e) {
    $("#signUp").delay(100).fadeIn(100);
    $("#userLogin").fadeOut(100);
    $('#userLogin-link').removeClass('active');
    $(this).addClass('active');

  });
}

LoginShow(){
  $(function (e) {
    $("#userLogin").delay(100).fadeIn(100);
    $("#signUp").fadeOut(100);
    $('#signUp-link').removeClass('active');
    $(this).addClass('active');
  });
}

  
  getBool(b) {
    if(b=='true'){
      return true;
    }
    return false;
  }

  ngOnInit() {

    this.loginStatus = this.getBool(this.cookieService.get('cookiedataLoginStatus'));
    this.userlogdata.userEmail = this.cookieService.get('cookiedatauserdata');
    this.userlogdata.favcities = JSON.parse(this.cookieService.get('cookiedataFavcities'));
    this.datalog.loginStatusMethod(this.loginStatus);
    this.datalog.userDataMethod(this.userlogdata.userEmail);
    this.datalog.favcitiesMethod(this.userlogdata.favcities);
    
  }
 
}



  



  

