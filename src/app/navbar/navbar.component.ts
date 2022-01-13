import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //@ts-ignore
  isAdmin:boolean;
  //@ts-ignore
  isUser:boolean;
  type:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.type = localStorage.getItem('type');
    this.testUser();
  }

  testUser(){
    if(this.type == "admin"){
      this.isAdmin=true;
      this.isUser=false;
    }
    if(this.type == "user"){
      this.isAdmin=false;
      this.isUser=true;
    }
  }

  

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('adminId');
    localStorage.removeItem('type');

    this.router.navigate(['']);
  }
}
