import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Loginregistrationservice } from "./Loginregistrationservice";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private service:Loginregistrationservice, private router: Router) { }
    canActivate() {
        if (this.service.isLoggedIn()) {
            console.log('true')
            return true;
        } else {
            console.log("Kein Zugang");
            this.router.navigate(['/login'])
            return false;
        }
    }
}