import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../user-service.service';
import { User } from 'src/app/Models/user';
import { Admin } from 'src/app/Models/admin';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login: string = "";
  password: string = "";
  user: User = new User();
  admin: Admin = new Admin();
  user1: any;
  submitted = false;
  repswd: string = '';
  checktype: boolean = false;
  constructor(private userService: UserServiceService,
    private route: ActivatedRoute, private router: Router) { }

  list() {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
    this.submitted = false;

  }

  changetype() {
    this.checktype = !this.checktype;
  }



  onSubmit() {
    if (this.checktype == true) {
      this.admin.login = this.login;
      this.admin.password = this.password;
      this.userService
        .signInAdmin(this.admin).subscribe(data => {
          if (data == null) {
            (error: any) => console.log(error);
            this.submitted = true;
          } else {
            this.user1 = data;
            console.log(this.user1);
            localStorage.setItem('adminId', JSON.stringify(this.user1.id))
            localStorage.setItem('type', "admin")
          }
          this.gotoList();
        });
    } else {
      this.user.login = this.login;
      this.user.password = this.password;
      this.userService
        .signInUser(this.user).subscribe(data => {
          if (data == null) {
            (error: any) => console.log(error);
            this.submitted = true;
          } else {
            this.user1 = data;
            console.log(this.user1);
            localStorage.setItem('userId', JSON.stringify(this.user1.id))
            localStorage.setItem('type', "user")
          }
          this.gotoList();
        });

    }

  }



  gotoList() {
    this.router.navigate(['/tickets'], { replaceUrl: true });
  }


}
