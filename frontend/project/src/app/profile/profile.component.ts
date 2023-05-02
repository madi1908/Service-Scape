import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  logout() {
    localStorage.removeItem('token')
    HomeComponent.is_logged = false;
  }
}
