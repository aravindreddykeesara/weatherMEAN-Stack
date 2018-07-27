import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { DataTransferService} from './data-transfer.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AboutComponent } from './about/about.component';
import { FlashMessagesService } from 'angular2-flash-messages';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService, DataTransferService, CookieService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
