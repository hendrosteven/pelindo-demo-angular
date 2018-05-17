import { Component, OnInit } from '@angular/core';
import { Book } from '../classes/book';
import { Author } from '../classes/author';
import { AuthorService } from '../services/author-service';
import { BookService } from '../services/book-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.css']
})
export class BookInputComponent implements OnInit {

  isError: boolean = false;
  errors: String[] = [];
  book: Book = new Book();
  authors: Author[]= [];
  
  constructor(private authorService: AuthorService, private bookService: BookService
  ,private router: Router) { }

  ngOnInit() {
    this.authorService.findAll().subscribe(output => {
      this.authors = output;
    },errors=>{
      console.log(errors);
    });
  }

  onSave(){
    this.bookService.save(this.book).subscribe(output=>{
      if(output.success){
        this.router.navigate(["list-book"]);
      }else{
        this.isError = true;
        this.errors = output.messages;
      }
    },errors=>{
      console.log(errors);
      this.isError = true;
      this.errors[0] = errors;
    });
  }

 
}
