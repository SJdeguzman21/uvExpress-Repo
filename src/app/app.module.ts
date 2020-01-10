import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {environment} from './../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './home/cards/cards.component';
import { RegistrationFormComponent } from './home/registration-form/registration-form.component';
import { SitReservationComponent } from './home/sit-reservation/sit-reservation.component';
import { FooterComponent } from './navbar/footer/footer.component';
import { RegistrationService } from './registration.service';
import { RegisteredVanListComponent } from './home/registered-van-list/registered-van-list.component';

import { SitReservation1Component } from './home/sit-reservation/sit-reservation1/sit-reservation1.component';
import { ReserveSitRightComponent } from './home/sit-reservation/sit-reservation1/reserve-sit-right/reserve-sit-right.component';
import { VanFilter } from './vanFilter.pipe';
import { ReservedSitFilter } from './reservedSitFilter.pipe';
import { ViewDetailsComponent } from './home/registered-van-list/view-details/view-details.component';
import { EmailComponent } from './login/email/email.component';
import { RegisterComponent } from './login/register/register.component';
import { ReservationService } from './reservation.service';
import { SitCodeComponent } from './home/sit-reservation/sit-reservation1/sit-code/sit-code.component';
import { AuthGuard } from './auth-guard.service';
import { AdminComponent } from './login/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CardsComponent,
    RegistrationFormComponent,
    SitReservationComponent,
    FooterComponent,
    RegisteredVanListComponent,
    VanFilter,
   ReservedSitFilter,
    SitReservation1Component,
    ReserveSitRightComponent,
    ViewDetailsComponent,
    EmailComponent,
    RegisterComponent,
    SitCodeComponent,
    AdminComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'login/admin', component: AdminComponent},
      {path: 'login/email', component: EmailComponent},
      {path: 'login/register', component: RegisterComponent},

      {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'home/registration-form', component: RegistrationFormComponent, canActivate: [AuthGuard]},
      {path: 'home/registration-form/:id', component: RegistrationFormComponent,  canActivate: [AuthGuard]},
      {path: 'home/sit-reservation', component: SitReservationComponent,  canActivate: [AuthGuard]},
      {path: 'home/registered-van-list', component: RegisteredVanListComponent,  canActivate: [AuthGuard]},
      {path: 'home/sit-reservation/sit-reservation1/reservedSit', component: ReserveSitRightComponent,  canActivate: [AuthGuard]},
      {path: 'home/sit-reservation/sit-reservation1/sitCode', component: SitCodeComponent,  canActivate: [AuthGuard]},
      {path: 'home/registered-van-list/view-details/:id', component: ViewDetailsComponent,  canActivate: [AuthGuard]},
      {path: 'home/sit-reservation/sit-reservation1/:id', component: SitReservation1Component,  canActivate: [AuthGuard]},
      {path: 'home/sit-reservation/sit-reservation1/:id/:key', component: ReserveSitRightComponent,  canActivate: [AuthGuard]},
      { path: '**', redirectTo: 'login' },
      
    ])
  ],
  providers: [
    RegistrationService,
    ReservationService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
