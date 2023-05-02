import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";
import {Observable} from "rxjs";
import { Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class NewAdService {
  BASE_URL = 'http://127.0.0.1:8000/rent'
  constructor(private client: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}/categories`)
  }

  postAd(adData: FormData) {
    const url = `${this.BASE_URL}/new_ad/`
    return this.client.post(url, FormData)
  }
}
