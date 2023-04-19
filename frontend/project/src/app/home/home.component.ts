import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  static is_logged: boolean;
  constructor(public router: Router) {
    HomeComponent.is_logged=false;
  }
}
