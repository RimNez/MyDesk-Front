import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../user-service.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User = new User();
  user1:any;
  submitted = false;
  repswd : string = '';

  constructor(private userService: UserServiceService,
    private route: ActivatedRoute,private router: Router) { }

  list(){
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
    this.newUser();
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  onSubmit() {
    this.userService
    .signInUser(this.user).subscribe(data => {
      console.log(data)
      this.user1 = data;
      localStorage.setItem('userId',JSON.stringify(this.user1.id) )
      if(data==null){
        (error: any) => console.log(error);
        this.submitted=true;
      }else{
        this.gotoList();
      } 
    });
    
  }

  

  gotoList() {
    this.router.navigate(['/tickets']);
  }


}
