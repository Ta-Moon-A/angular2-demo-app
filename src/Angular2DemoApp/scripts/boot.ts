/// <reference path="../typings/index.d.ts" />
import {bootstrap}    from "@angular/platform-browser-dynamic";
import {provideForms} from "@angular/forms";
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from './app.routes';  // my router
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';


bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, REACTIVE_FORM_DIRECTIVES, HTTP_PROVIDERS]);
