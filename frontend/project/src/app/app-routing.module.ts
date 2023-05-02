import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryProductsComponent} from "./category-products/category-products.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AdComponent} from "./ad/ad.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'categories', component: CategoryListComponent},
  { path: 'categories/:id/products', component: CategoryProductsComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'categories/:id/products/:id/product_detail', component: ProductDetailComponent},
  { path: 'products/:id/product_detail', component: ProductDetailComponent},
  { path: 'create_new_ad', component: AdComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
