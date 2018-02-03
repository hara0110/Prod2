import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database-deprecated';
import {CartService} from '../../providers/cart.service';
import {AuthService} from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
  providers: [CartService,AuthService,AngularFireDatabase]
})
export class OrdersPage {
  orders :FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public cartService: CartService,
              public authService: AuthService
             ) {
    cartService.loadOrders(this.authService.getLoggedUID());
    this.orders = this.cartService.orderItems;
  }



}
