import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './errorPage/errorPage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    ErrorPageComponent
  ]
})
export class Module1Module { }
