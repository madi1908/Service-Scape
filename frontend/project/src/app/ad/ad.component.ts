import { Component } from '@angular/core';
import {Category} from "../models/category";
import {NewAdService} from "../service/new-ad.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../models/product";
import axios from 'axios';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent {
  adForm: FormGroup;
  categories: Category[] | undefined;
  selectedImage: File | undefined;
  private products: Product[] | undefined;
  // private product:  ;

  constructor(private formBuilder: FormBuilder, private adService: NewAdService,
              private router: Router,private route: ActivatedRoute) {
    this.adForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      status: [false],
      phoneNumber: ['', Validators.required],

    });

    // Fetch categories from server
    this.adService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  async createOwnAd() {
    const adData = new FormData();

    adData.append('name', this.adForm.value.productName);
    adData.append('description', this.adForm.value.description);
    adData.append('price', this.adForm.value.price);
    adData.append('category', this.adForm.value.category);
    adData.append('status', this.adForm.value.status);

    if (this.selectedImage) {
      adData.append('image', this.selectedImage);
    }
    const object: any = {};
    adData.forEach(function(value, key){
      object[key] = value;
    });
    const response = await axios.post('http://127.0.0.1:8000/rent/product/', object, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    console.log(response);
    // this.adService.postAd(adData).subscribe(() => {
    //   this.products.push(this.product);
    //   this.name = ""
    // });
  }

  onImageSelected(event: any): void{
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.adForm.patchValue({image: file})
    }
  }
}
