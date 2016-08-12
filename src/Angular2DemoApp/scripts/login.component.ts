import {Component} from "@angular/core";
//import {AuthService} from "./services/Auth.service";



@Component({
    selector: "ts-login",
    template: `<div class="row" style="margin-top: 200px; margin-right: auto; margin-left: auto; width: 300px; text-align: center; ">
                    <fieldset>
                        <legend>Login</legend>

                        <div class="form-group">
                            <input type="email" class="form-control" name="Email" required="required" placeholder="Enter Email">
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="password" class="form-control" name="Password" required="required" placeholder="password">
                        </div>
                        <br /><br />

                        <button [disabled] class="btn btn-default" >Log In</button>
                   </fieldset>
                 </div>`
    //providers: [AuthService]
})


export class LoginComponent {
    //constructor(private _authService: AuthService) { }

    //onSubmit() {
    //    console.log("test log text");
    //}
}