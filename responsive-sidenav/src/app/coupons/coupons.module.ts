import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponListComponent } from './coupon-list/coupon-list.component';


@NgModule({
  declarations: [
    CouponListComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule
  ]
})
export class CouponsModule { }
