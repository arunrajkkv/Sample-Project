import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './module1/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './module1/home/home.component';
import { ErrorPageComponent } from './module1/errorPage/errorPage.component';
import { HttpClientModule } from '@angular/common/http';
import { Module1Module } from './module1/module1.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        Module1Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
