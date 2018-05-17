import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  isError: boolean = false;
  errors: String[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    
  }

  onRegister(){
    this.userService.register(this.user).subscribe(output =>{
      if(output.success){
        this.router.navigate(["login"]);
      }else{
        this.isError = true;
        this.errors = output.messages;
      }
    }, errors=>{
      console.log(errors);
    });
  }

}
