import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegistrationComponent } from './shared/components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
