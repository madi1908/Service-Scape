import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import { AuthToken } from '../AuthToken';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000/rent'
  constructor(private client: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}/categories`)
  }
  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/login/`, {
      username,
      password,
    });
  }
}
