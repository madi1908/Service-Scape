import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  constructor(public router:Router) {
    HomeComponent.is_logged = false;
  }
  login_button(){
    this.router.navigate(["app"])
  }
  register_button(){
    this.router.navigate(["register"])
  }
  ngOnInit(): void{
    const token = localStorage.getItem('token')
    if(token){
      HomeComponent.is_logged = true;
    }
  }
  get is_logged():boolean{
    return HomeComponent.is_logged;
  }

  profile_button(){
    this.router.navigate(["profile"])
  }
  create_ad_button(){
    this.router.navigate(["create_new_ad"])
  }
}

