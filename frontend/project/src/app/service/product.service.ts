import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 BASE_URL = 'http://127.0.0.1:8000/rent'
  constructor(private client: HttpClient) { }

  getCategoryProducts(category_id:string): Observable<Product[]>{
   return this.client.get<Product[]>(
     `${this.BASE_URL}/categories/${category_id}/products/`
   );
  }
  getProducts(): Observable<Product[]>{
   return this.client.get<Product[]>(
     `${this.BASE_URL}/products`
   );
  }
  getProduct(product_id:string):Observable<Product>{
   return this.client.get<Product>(
     `${this.BASE_URL}/products/${product_id}`
   );
  }
  getCategoryProduct(product_id:string, category_id:string):Observable<Product>{
   return this.client.get<Product>(
     `${this.BASE_URL}/categories/${category_id}/products/${product_id}`
   );
  }
}
