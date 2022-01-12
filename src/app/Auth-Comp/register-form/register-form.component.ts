import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/admin.service';
import { UserServiceService } from 'src/app/user-service.service';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: User = new User();
  admin:Admin = new Admin();
  submitted = false;
  mismatch =false;
  repswd : string = '';

  constructor(private userService: UserServiceService,
    private adminService : AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newAdmin():void{
    this.submitted = false;
    this.admin = new Admin();
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService
    .createUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      //this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {    
    if(this.user.password == this.repswd){
      this.submitted = true;
      this.save();  
    }else{
      //this.router.navigate(['/register']);
      this.mismatch=true;
    }
      
  }

  gotoList() {
    this.router.navigate(['/login']);
  }

}
