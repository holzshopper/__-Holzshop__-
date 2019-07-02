import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { LoginComponent } from './shared/login/login.component';
import { ProductMiniComponent } from './components/product-mini/product-mini.component';
import { ProductFilterComponent} from './shared/product-filter/product-filter.component';
import { EditOfferComponent } from './shared/components/edit-offer/edit-offer.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AuthGuard } from './shared/services/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'test', component: ProductMiniComponent},
  { path: 'filter', component: ProductFilterComponent},
  { path: 'editOffer', component: EditOfferComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
