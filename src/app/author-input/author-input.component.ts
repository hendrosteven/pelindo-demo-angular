import { Component, OnInit } from '@angular/core';
import { Author } from '../classes/author';
import { AuthorService } from '../services/author-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-input',
  templateUrl: './author-input.component.html',
  styleUrls: ['./author-input.component.css']
})
export class AuthorInputComponent implements OnInit {
  
  isError: boolean = false;
  errors: String[] = [];
  author: Author = new Author();

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }

  onSave(){
    this.authorService.save(this.author).subscribe(output =>{
      if(output.success){
        this.router.navigate(["list-author"]);
      }else{
        this.isError = true;
        this.errors = output.messages;
      }
    },errors=>{
      this.isError = true;
      this.errors[0] = errors;
    });
  }

}
