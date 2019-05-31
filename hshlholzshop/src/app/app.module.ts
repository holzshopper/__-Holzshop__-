import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LogInMaskComponent } from './log-in-mask/log-in-mask.component';
import { RegistrationMaskComponent } from './registration-mask/registration-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInMaskComponent,
    RegistrationMaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot([
      {
        path: 'registration',
        component: RegistrationMaskComponent
      },
      {
        path: 'login',
        component: LogInMaskComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
