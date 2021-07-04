import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ContactComponent } from './contact/contact.component';

import { NgImageSliderModule } from 'ng-image-slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component'; 
import { Header2Component } from './header2/header2.component';
import { NewsFeedsComponent } from './news-feeds/news-feeds.component';
import { StocksBannerComponent } from './stocks-banner/stocks-banner.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,  Header2Component, NewsFeedsComponent, StocksBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgImageSliderModule,
    BrowserAnimationsModule,HttpClientModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
