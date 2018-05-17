import { Component, OnInit } from '@angular/core';
import { Book } from '../classes/book';
import { BookService } from '../services/book-service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService, public progress: NgProgress) { }

  ngOnInit() {
    this.progress.start();
    this.bookService.findAll().subscribe(output => {
      this.books = output;
      this.progress.done();
    },errors=>{
      console.log(errors);
      this.progress.done();
    });
  }

}
