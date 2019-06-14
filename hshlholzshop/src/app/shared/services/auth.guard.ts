// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
// import { AmplifyService } from 'aws-amplify-angular'; 
// import { Injectable } from '@angular/core'; 
 
// @Injectable({ 
//   providedIn: 'root' 
// }) 
// export class AuthGuard implements CanActivate { 
 
//   constructor( private amplifyService:AmplifyService , 
//     private router : Router ) { 
//   } 
 
//   async canActivate( 
//     next: ActivatedRouteSnapshot, 
//     state: RouterStateSnapshot)  { 
 
 
 
//     if(await this.amplifyService.auth().currentAuthenticatedUser()) { 
//       return true; 
//     }  else { 
//       await this.router.navigate(['']); 
//     } 
//   } 
// } 