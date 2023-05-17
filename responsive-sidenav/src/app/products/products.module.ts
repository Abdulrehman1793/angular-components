import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductLevelThreeOneComponent } from './product-level-three-one/product-level-three-one.component';
import { ProductLevelThreeTwoComponent } from './product-level-three-two/product-level-three-two.component';
import { ProductLevelTwoOneComponent } from './product-level-two-one/product-level-two-one.component';
import { ProductLevelOneTwoComponent } from './product-level-one-two/product-level-one-two.component';


@NgModule({
  declarations: [
    ProductLevelThreeOneComponent,
    ProductLevelThreeTwoComponent,
    ProductLevelTwoOneComponent,
    ProductLevelOneTwoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
