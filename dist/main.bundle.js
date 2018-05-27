webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-home></app-home>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    /* tslint:disable */
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
        /* tslint:disable */
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_service__ = __webpack_require__("../../../../../src/app/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__weather_service__["a" /* WeatherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flexsearch\">\n  <div class=\"flexsearch--wrapper\">\n    <form class=\"flexsearch--form\" action=\"#\" method=\"post\">\n      <div class=\"flexsearch--input-wrapper\">\n        <input class=\"flexsearch--input\" type=\"search\" placeholder=\"search\">\n        <a>\n          <img class=\"flexsearch--submit responsive\" type=\"submit\" src=\"/assets/searchbutton.png\">\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"weather-card one\">\n        <div class=\"top\">\n          <div class=\"wrapper\">\n            <div class=\"mynav\">\n              <div id=\"navleft\" class=\"float-left\">\n                <img src=\"/assets/wind-sign.png\">\n                <span>{{currdata.windSpeed.toFixed(0)}}mph</span>\n              </div>\n              <div class=\"float-center\">\n\n                <img src=\"/assets/cloudycover.png\">\n                <span>{{(currdata.cloudCover*100).toFixed(0)}}%</span>\n\n              </div>\n              <div class=\"float-right\">\n                <img src=\"/assets/humidity.png\">\n                <span>{{currdata.humidity*100}}%</span>\n              </div>\n\n\n\n            </div>\n\n            <canvas id=\"curricon\" class=\"currrenticon\"></canvas>\n            <p class=\"temp\">\n              <span class=\"temp-value\">{{currdata.temperature.toFixed(0) }}</span>\n              <span class=\"deg\">0</span>\n              <a href=\"javascript:;\">\n                <!-- <span class=\"temp-type\">F</span> -->\n                <span class=\"heading\">{{currdata.summary}}</span>\n              </a>\n            </p>\n\n            <div class=\"mynav\">\n              <div id=\"navleft\" class=\"float-left\">\n                Feels like\n                <span>: {{currdata.apparentTemperature.toFixed(0)}}</span>\n                <span class=\"deg\">0</span>\n              </div>\n              <div class=\"float-center\">\n\n                <img src=\"/assets/hightemp.png\">\n                <span>{{dailyData[0].temperatureHigh.toFixed(0)}}</span>\n                <span class=\"deg\">0</span>\n              </div>\n              <div class=\"float-right\">\n                <img src=\"/assets/lowtemp.png\">\n                <span>{{dailyData[0].temperatureLow.toFixed(0)}}</span>\n                <span class=\"deg\">0</span>\n              </div>\n\n            </div>\n          </div>\n          <!-- bottom starts -->\n          <div class=\"bottom\">\n            <div class=\"wrapper\">\n              <ul class=\"forecast\">\n                <a href=\"javascript:;\">\n                  <span class=\"lnr go-up\">{{dailyData.summary}}</span>\n                </a>\n                <span style=\" display:block;width:32px;height:32px\">\n                  <canvas id=\"curricon\" class=\"currrenticon\"></canvas>\n                  <canvas width=\"64\" height=\"64\" style=\"width: 100%;height: 100%\" class=\"icon2\"></canvas>\n                </span>\n                <li *ngFor=\"let dailystats of dailyData\" class=\"active\">\n                  <span class=\"date\">{{dailystats.time}}</span>\n\n                  <img src=\"/assets/weathericons/{{dailystats.icon}}.png\">\n                  <span class=\"lnr\">\n                    <img src=\"/assets/up-arrow.png\">\n                    <span class=\"temp\">{{dailystats.temperatureHigh.toFixed(0)}}</span>\n                    <span class=\"deg\">0</span>\n                    <img src=\"/assets/down-arrow.png\">\n                    <span class=\"temp\">{{dailystats.temperatureLow.toFixed(0)}}</span>\n                    <span class=\"deg\">0</span>\n                  </span>\n\n                </li>\n              </ul>\n            </div>\n          </div>\n\n\n\n          <!-- wait -->\n\n\n          <!--botton here  -->\n\n        </div>\n      </div>\n\n\n\n\n      <!-- <div class=\"bottom\">\n  <div class=\"wrapper\">\n    <ul class=\"forecast\">\n      <a href=\"javascript:;\">\n        <span class=\"lnr lnr-chevron-up go-up\"></span>\n      </a>\n      <span style=\" display:block;width:32px;height:32px\">\n        <canvas id=\"curricon\" class=\"currrenticon\"></canvas>\n        <!-- <canvas width=\"64\" height=\"64\" style=\"width: 100%;height: 100%\" class=\"icon2\"></canvas>\n      </span>\n      <li *ngFor=\"let dailystats of dailyData\" class=\"active\">\n        <span class=\"date\">{{dailystats.time}}</span>\n\n\n        <span class=\"lnr\">\n          <img src=\"/assets/hightemp.png\">\n          <span class=\"temp\">{{dailystats.temperatureHigh.toFixed(0)}}</span>\n          <span class=\"deg\">0</span>\n          <img src=\"/assets/lowtemp.png\">\n          <span class=\"temp\">{{dailystats.temperatureLow.toFixed(0)}}</span>\n          <span class=\"deg\">0</span>\n        </span>\n\n      </li>\n    </ul>\n  </div>\n</div> -->\n\n\n\n\n      <!-- <span class=\"lnr lnr-sun condition\">\n  <span class=\"temp\">23\n    <span class=\"deg\">0</span>\n    <span class=\"temp-type\">C</span>\n  </span>\n</span> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900\");\n@import url(\"https://cdn.linearicons.com/free/1.0.0/icon-font.min.css\");\nbody {\n  font-family: 'Montserrat', sans-serif; }\n/***********************\n * Essential Structure *\n ***********************/\n.flexsearch--wrapper {\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  overflow: hidden;\n  background: transparent;\n  margin: 0;\n  position: static; }\n.flexsearch--form {\n  overflow: hidden;\n  position: relative; }\n.flexsearch--input-wrapper {\n  padding: 0 66px 0 0;\n  /* Right padding for submit button width */\n  overflow: hidden; }\n.flexsearch--input {\n  width: 100%; }\n/***********************\n * Configurable Styles *\n ***********************/\n.flexsearch {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n  /* Padding for other horizontal elements */ }\n.flexsearch--input {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 5vh;\n  padding: 0 46px 0 10px;\n  border-color: #888;\n  border-radius: 35px;\n  /* (height/2) + border-width */\n  border-style: solid;\n  border-width: 5px;\n  margin-top: 15px;\n  color: #333;\n  font-family: 'Helvetica', sans-serif;\n  font-size: 26px;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.flexsearch--submit {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: block;\n  max-width: 50px;\n  max-height: 50px;\n  padding: 0;\n  border: none;\n  padding-top: 10px;\n  margin-top: 12px;\n  /* margin-top + border-width */\n  margin-right: 10px;\n  /* border-width */\n  background: transparent;\n  color: #888;\n  font-family: 'Helvetica', sans-serif;\n  font-size: 40px;\n  line-height: 60px; }\n.flexsearch--input:focus {\n  outline: none;\n  border-color: #333; }\n.flexsearch--input:focus.flexsearch--submit {\n  color: #333; }\n.flexsearch--submit:hover {\n  color: #333;\n  cursor: pointer; }\n::-webkit-input-placeholder {\n  color: #888; }\ninput:-moz-placeholder {\n  color: #888; }\n/****************\n * Pretify demo *\n ****************/\n.h1 {\n  float: left;\n  margin: 25px;\n  color: #333;\n  font-family: 'Helvetica', sans-serif;\n  font-size: 45px;\n  font-weight: bold;\n  line-height: 45px;\n  text-align: center; }\n.weather-card {\n  margin: 60px auto;\n  max-width: 700px;\n  background: #f0f8ff;\n  -webkit-box-shadow: 0 1px 38px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 1px 38px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.25);\n  overflow: hidden; }\n.weather-card .top {\n  position: relative;\n  height: 100vh;\n  background-color: #fff;\n  width: 100%;\n  overflow: hidden;\n  background: aliceblue;\n  background-size: cover;\n  background-position: center center;\n  text-align: center; }\n.weather-card .top .wrapper {\n  padding: 30px;\n  position: relative;\n  z-index: 1; }\n.weather-card .top .wrapper .mynav {\n  height: 20px; }\n.weather-card .top .wrapper .mynav .lnr {\n  color: #000;\n  font-size: 20px; }\n.weather-card .top .wrapper .mynav .float-center {\n  color: #000;\n  font-size: 20px;\n  display: inline-block;\n  text-align: center; }\n.weather-card .top .wrapper .mynav .float-left {\n  display: inline-block;\n  float: left;\n  font-size: 20px;\n  color: #000; }\n.weather-card .top .wrapper .mynav .float-right {\n  position: relative;\n  text-align: right;\n  font-size: 20px;\n  font-weight: 300;\n  color: #000; }\n.weather-card .top .wrapper .heading {\n  display: inline-block;\n  font-size: 40px;\n  font-weight: 500;\n  color: #000;\n  -webkit-transform: translate(0, -20%);\n          transform: translate(0, -20%);\n  margin-top: 10px; }\n.weather-card .top .wrapper .currrenticon {\n  margin-top: 20px;\n  font-size: 21px;\n  font-weight: 400;\n  color: #000; }\n.weather-card .top .wrapper .temp {\n  margin-top: 20px; }\n.weather-card .top .wrapper .temp a {\n  text-decoration: none;\n  color: #000; }\n.weather-card .top .wrapper .temp a .temp-type {\n  font-size: 85px; }\n.weather-card .top .wrapper .temp .temp-value {\n  display: inline-block;\n  font-size: 75px;\n  font-weight: 600;\n  color: #000; }\n.weather-card .top .wrapper .temp .deg {\n  display: inline-block;\n  font-size: 35px;\n  font-weight: 600;\n  color: #000;\n  vertical-align: top;\n  margin-top: 10px; }\n.weather-card .top:after {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.weather-card .mynav .deg {\n  display: inline-block;\n  font-size: 10px;\n  vertical-align: top;\n  color: #000;\n  margin-top: 2%; }\n.weather-card .bottom {\n  padding: 0 30px;\n  background: #fff; }\n.weather-card .bottom .wrapper .forecast {\n  overflow: hidden;\n  margin: 0;\n  font-size: 0;\n  padding: 0;\n  padding-top: 20px; }\n.weather-card .bottom .wrapper .forecast a {\n  text-decoration: none;\n  color: #000; }\n.weather-card .bottom .wrapper .forecast .go-up {\n  text-align: left;\n  display: block;\n  font-size: 25px;\n  margin-bottom: 10px; }\n.weather-card .bottom .wrapper .forecast li {\n  display: block;\n  font-size: 25px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.25);\n  line-height: 1em;\n  margin-bottom: 30px; }\n.weather-card .bottom .wrapper .forecast li .date {\n  display: inline-block;\n  text-align: left; }\n.weather-card .bottom .wrapper .forecast li .condition {\n  display: inline-block;\n  vertical-align: middle;\n  float: right;\n  font-size: 25px; }\n.weather-card .bottom .wrapper .forecast li .temp {\n  display: inline-block;\n  vertical-align: top;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 20px;\n  -webkit-transform: translate(0, -70%);\n          transform: translate(0, -70%);\n  font-weight: 400; }\n.weather-card .bottom .wrapper .forecast li .deg {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 400;\n  vertical-align: top; }\n.weather-card .bottom .wrapper .forecast li .condition .temp .temp-type {\n  font-size: 20px; }\n.weather-card .bottom .wrapper .forecast li.active {\n  color: rgba(0, 0, 0, 0.8); }\n.bottomcanvas {\n  width: 100%;\n  height: 100%;\n  display: block;\n  float: left;\n  margin: 7px 0 0 6px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.weather-card.rain .top {\n  background: url(\"http://img.freepik.com/free-vector/girl-with-umbrella_1325-5.jpg?size=338&ext=jpg\") no-repeat;\n  background-size: cover;\n  background-position: center center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("../../../../../src/app/weather.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_weatherservice) {
        this._weatherservice = _weatherservice;
        this.title = 'app';
        this.classname = 'icon1';
        this.icons = new Skycons({ "color": "#000" });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weatherservice.getMainJsonData()
            .subscribe(function (res) {
            _this.currdata = res['currently'];
            _this.dailyData = res['daily']['data'].map(function (x) { return (__assign({}, x)); });
            _this.icons.add("curricon", _this.currdata['icon']);
            _this.icons.play();
            _this.dailyData.forEach(function (value) {
                value['time'] = timeConverter(value['time']);
            });
        });
        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var day = days[a.getDay()];
            return day;
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        })
        /* tslint:disable */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">About</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#myModal\">Login</a>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-lg\">\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"container\">\n\n          \n              <div class=\"panel panel-login\">\n                <div class=\"panel-heading\">\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <a href=\"#\" class=\"active\" id=\"admin-login-link\">Admin</a>\n                    </div>\n                    <div class=\"col-6\">\n                      <a href=\"#\" id=\"shopkeeper-login-link\">StoreKeeper</a>\n                    </div>\n                  </div>\n                  <hr>\n                </div>\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n\n                      <!-- form signup -->\n                      <div class=\"container\">\n\n                        <div *ngIf=\"!emailid;else forminfo\">\n                          <form id =\"admin-login\" [formGroup]=\"rForm\" (ngSubmit)=\"addUser(rForm.value)\">\n                            <div class=\"form-group\">\n                            <input type=\"email\" formControlName=\"emailid\" tabindex=\"1\" class=\"form-control\" placeholder=\"email id\" required>\n                          </div>\n                          <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['emailid'].valid && rForm.controls['emailid'].touched\">enter a valid email</div>\n\n                          <div class=\"form-group\">\n                            <input type=\"password\" formControlName=\"password\" tabindex=\"1\" class=\"form-control\" placeholder=\"password\" required>\n                          </div>\n                          <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">minimum password length is 4 characters</div>\n\n                          <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t         <div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t    \t   <div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t    \t  <button type = \"submit\" tabindex=\"4\" class=\"form-control btn btn-admin-login\" [disabled]=\"!rForm.valid\">Login</button>\n\t\t\t\t\t\t\t\t\t\t\t       </div>\n\t\t\t\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t      \t</div> \n                        </form>\n                        </div> \n                        \n                           <ng-template #forminfo>\n                          <h4>{{emailid}}</h4>\n                        </ng-template>\n                        \n                    \n                        \n\n\n                        <!-- form signup ends -->\n\n\n                        <form id=\"shopkeeper-login\" role=\"form\" style=\"display: none;\">\n                          <div class=\"form-group\">\n                            <input type=\"text\" name=\"username\" id=\"shopkeeperUsername\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                          </div>\n                          <div class=\"form-group\">\n                            <input type=\"password\" name=\"password\" id=\"shopkeeperPassword\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                          </div>\n                          <div class=\"form-group\">\n                            <div class=\"row\">\n                              <div class=\"col-sm-6 col-sm-offset-3\">\n                                <button type=\"button\" name=\"action\" value=\"shopkeeperLogin\" id=\"shopkeeper-login-submit\" tabindex=\"4\" class=\"form-control btn btn-shopkeeper-login\">Log in </button>\n                              </div>\n                            </div>\n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n           \n\n\n\n\n\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-nav {\n  float: none;\n  margin: 0 auto;\n  display: block;\n  text-align: center; }\n\n.navbar-nav > li {\n  display: inline-block;\n  float: none;\n  font-size: 20px; }\n\n.nav-item {\n  padding-right: 40px; }\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\nbody {\n  padding-top: 90px; }\n\n.align {\n  text-align: center; }\n\n.panel-login {\n  border-color: #ccc;\n  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2); }\n\n.panel-login > .panel-heading {\n  color: #00415d;\n  background-color: #fff;\n  border-color: #fff;\n  text-align: center; }\n\n.panel-login > .panel-heading a {\n  text-decoration: none;\n  color: #666;\n  font-weight: bold;\n  font-size: 15px;\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear; }\n\n.panel-login > .panel-heading a.active {\n  color: #029f5b;\n  font-size: 18px; }\n\n.panel-login > .panel-heading hr {\n  margin-top: 10px;\n  margin-bottom: 0px;\n  clear: both;\n  border: 0;\n  height: 1px;\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0)); }\n\n.panel-login input[type=\"text\"],\n.panel-login input[type=\"email\"],\n.panel-login input[type=\"password\"] {\n  height: 45px;\n  border: 1px solid #ddd;\n  font-size: 16px;\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear; }\n\n.panel-login input:hover,\n.panel-login input:focus {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-color: #ccc; }\n\n.btn-admin-login {\n  background-color: #59B2E0;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #59B2E6; }\n\n.btn-admin-login:hover,\n.btn-admin-login:focus {\n  color: #fff;\n  background-color: #53A3CD;\n  border-color: #53A3CD; }\n\n.btn-shopkeeper-login {\n  background-color: #1CB94E;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #1CB94A; }\n\n.btn-shopkeeper-login:hover,\n.btn-shopkeeper-login:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_service__ = __webpack_require__("../../../../../src/app/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_weatherService, fb, router) {
        this._weatherService = _weatherService;
        this.fb = fb;
        this.router = router;
        this.userlogdata = { userEmail: '', password: '', favcities: [''] };
        this.emailid = '';
        this.password = '';
        this.emailValidAlert = 'This field is required';
        this.rForm = fb.group({
            'emailid': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[^ @]*@[^ @]*")])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4)])]
        });
    }
    NavbarComponent.prototype.addUser = function (data) {
        console.log('data value' + JSON.stringify(data));
        this.userlogdata.userEmail = data.emailid;
        this.userlogdata.password = data.password;
        this._weatherService.insertUser(this.userlogdata);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#admin-login-link').click(function (e) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#admin-login").delay(100).fadeIn(100);
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#shopkeeper-login").fadeOut(100);
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#shopkeeper-login-link').removeClass('active');
            __WEBPACK_IMPORTED_MODULE_4_jquery__(this).addClass('active');
            e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#shopkeeper-login-link').click(function (e) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#shopkeeper-login").delay(100).fadeIn(100);
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#admin-login").fadeOut(100);
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#admin-login-link').removeClass('active');
            __WEBPACK_IMPORTED_MODULE_4_jquery__(this).addClass('active');
            e.preventDefault();
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
        })
        /* tslint:disable */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    /* tslint:disable */
    // tslint:disable-before-line:quotemark
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.getMainJsonData = function () {
        var _this = this;
        return this._http.get('https://api.myjson.com/bins/14f6qa')
            .map(function (result) { return _this.result = result.json(); });
    };
    WeatherService.prototype.insertUser = function (userdata) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log('enetred insert user');
        return this._http.post('http://localhost:3000//api/addUser', JSON.stringify(userdata), options)
            .map(function (result) { return _this.result = result.json(); });
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map