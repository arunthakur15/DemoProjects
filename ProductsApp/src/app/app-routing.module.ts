import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-product' },
  { path: 'create-product', component: ProductCreateComponent },
  { path: 'edit-product/:id', component: ProductEditComponent },
  { path: 'product-list', component: ProductListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }