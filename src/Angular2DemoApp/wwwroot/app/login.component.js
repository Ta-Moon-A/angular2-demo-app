"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//import {AuthService} from "./services/Auth.service";
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ts-login",
            template: "<div class=\"row\" style=\"margin-top: 200px; margin-right: auto; margin-left: auto; width: 300px; text-align: center; \">\n                    <fieldset>\n                        <legend>Login</legend>\n\n                        <div class=\"form-group\">\n                            <input type=\"email\" class=\"form-control\" name=\"Email\" required=\"required\" placeholder=\"Enter Email\">\n                        </div>\n                        <br />\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" name=\"Password\" required=\"required\" placeholder=\"password\">\n                        </div>\n                        <br /><br />\n\n                        <button [disabled] class=\"btn btn-default\" >Log In</button>\n                   </fieldset>\n                 </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
