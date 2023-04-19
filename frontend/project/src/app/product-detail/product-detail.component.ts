import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product: Product | undefined;
  product_id!: string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }
  ngOnInit():void {
    this.product_id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.product_id).subscribe((data)=>{
      this.product = data;
    });
  }
}
