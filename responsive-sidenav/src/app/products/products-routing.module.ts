import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductLevelThreeOneComponent } from './product-level-three-one/product-level-three-one.component';
import { ProductLevelThreeTwoComponent } from './product-level-three-two/product-level-three-two.component';
import { ProductLevelOneTwoComponent } from './product-level-one-two/product-level-one-two.component';
import { ProductLevelTwoOneComponent } from './product-level-two-one/product-level-two-one.component';

const routes: Routes = [
  {
    path: 'level1.2',
    component: ProductLevelOneTwoComponent,
  },
  {
    path: 'level2.1',
    component: ProductLevelTwoOneComponent,
  },
  {
    path: 'level3.1',
    component: ProductLevelThreeOneComponent,
  },
  {
    path: 'level3.2',
    component: ProductLevelThreeTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
