import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  isError: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    let hash = Md5.hashStr(this.password).toString();
    var loginData = {
      "email": this.email,
      "password": hash
    }
    console.log(loginData);

    this.userService.login(loginData).subscribe(output=>{
      if(output){
        let token = btoa(this.email + ':' + hash);  
        localStorage.setItem('token', token);
        localStorage.setItem('fullName', output.fullName);
        console.log(token);
        this.router.navigate(["home"]);
      }else{
        this.isError = true;
      }
    },errors=>{
      this.isError = true;
      console.log(errors);
    });

  }

}
