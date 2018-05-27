import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { WeatherService} from '../weather.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import { Userdata } from '../userdata';

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
   userArray: Array<Userdata>;
   emailid:string='';
   password:string = '';
   emailValidAlert:string = 'This field is required';
    

  constructor(private _weatherService: WeatherService, private fb: FormBuilder, private router: Router) {      
    this.rForm = fb.group({
      'emailid': [null, Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])],
      'password':[null,Validators.compose([Validators.required,Validators.minLength(4)])]
    });
   }

   addUser(data){
     console.log('data value' + JSON.stringify(data));
     this.userlogdata.userEmail = data.emailid;
     this.userlogdata.password = data.password;
     this._weatherService.insertUser(this.userlogdata);
    
   }

  ngOnInit() {

    $('#admin-login-link').click(function (e) {
      $("#admin-login").delay(100).fadeIn(100);
      $("#shopkeeper-login").fadeOut(100);
      $('#shopkeeper-login-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#shopkeeper-login-link').click(function (e) {
      $("#shopkeeper-login").delay(100).fadeIn(100);
      $("#admin-login").fadeOut(100);
      $('#admin-login-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
     
   

  }
 
}



  



  

