import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  products: Product[] = [];
  category_id!:string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit():void {
    this.category_id = this.route.snapshot.params['id'];
    this.productService.getCategoryProducts(this.category_id).subscribe((data)=>{
      this.products = data;
    });

  }
}
