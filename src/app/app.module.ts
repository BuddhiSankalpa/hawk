import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FacebookModule } from 'ngx-facebook';
// @ts-ignore
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthService } from './auth/auth.service';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsFeedsComponent } from './news-feeds/news-feeds.component';
import { PaymentComponent } from './payment/payment.component';
import { EditProfileComponent } from './post-login/edit-profile/edit-profile.component';
import { SelectPaymentComponent } from './post-login/select-payment/select-payment.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { StocksBannerComponent } from './stocks-banner/stocks-banner.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PaymentConfirmationComponent } from './payment/payment-confirmation/payment-confirmation.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,  
    Header2Component, 
    NewsFeedsComponent, 
    StocksBannerComponent, 
    EducationComponent, 
    PostLoginComponent,
    SelectPaymentComponent, 
    EditProfileComponent,
    PaymentComponent, 
    PaymentConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FacebookModule.forRoot()
  ],
  providers: [
     BsModalService, 
     BsModalRef,
     AuthGuard,
     AuthService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
