import { Component } from "@angular/core";
import { Router } from "@angular/router";
import Store from "../store";
import { LoginRequest } from "../Store/LoginResults";

@Component({
    templateUrl: "LoginPage.html"
})
export default class LoginPage {

    constructor(private store: Store, private router: Router) { }

    public creds: LoginRequest = {
        username: "",
        password: ""
    };

    public errorMessage = "";

    onLogin() {
        alert("onLogin Accesat!");
        this.store.login(this.creds)
            .subscribe(() => {
                if (this.store.order.items.length > 0) {
                    alert("onLogin Success!");
                    this.router.navigate(["/checkout"]);
                } else {
                    this.router.navigate(["/"]);
                }
            }, () => this.errorMessage = "Failed to login");
    }

}
