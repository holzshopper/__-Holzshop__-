import { CanActivate, RouterLink } from "@angular/router";
import { Injectable } from "@angular/core";
import { Loginregistrationservice } from "./Loginregistrationservice";

@Injectable()
export class RouteGuard implements CanActivate {
    constructor(private service:Loginregistrationservice) { }
    canActivate() {
        if (this.service.isLoggedIn()) {
            return true;
        } else {
            console.log("Kein Zugang");
            return false;
        }
    }
}