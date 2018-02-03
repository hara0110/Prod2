import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IntroSlidesPage } from '../pages/intro-slides/intro-slides';

import { LoginPage } from '../pages/login/login';
import {LogoutPage} from  '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';

import { ProductsPage } from '../pages/products/products';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { CartPage } from '../pages/cart/cart';
import { OrdersPage } from '../pages/orders/orders';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BillingPage } from '../pages/billing/billing';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import {AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireList} from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    IntroSlidesPage,
    LoginPage,
    RegisterPage,
    ForgotPassPage,
    ProductsPage,
    ProductDetailsPage,
    CartPage,
    OrdersPage,
    BillingPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({        
      apiKey: "AIzaSyA8BvKnTZt0z3ESc8_4YT1fDk8FfgI3yBc",
      authDomain: "prod-2-c7fbc.firebaseapp.com",
      databaseURL: "https://prod-2-c7fbc.firebaseio.com",
      projectId: "prod-2-c7fbc",
      storageBucket: "prod-2-c7fbc.appspot.com",
      messagingSenderId: "900381384679"
    }),                                       
    AngularFireDatabaseModule,                
    AngularFireAuthModule
                        
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroSlidesPage,
    LoginPage,
    RegisterPage,
    ForgotPassPage,
    ProductsPage,
    ProductDetailsPage,
    CartPage,
    OrdersPage,
    BillingPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
