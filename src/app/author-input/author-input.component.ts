import { Component, OnInit } from '@angular/core';
import { Author } from '../classes/author';
import { AuthorService } from '../services/author-service';

@Component({
  selector: 'app-author-input',
  templateUrl: './author-input.component.html',
  styleUrls: ['./author-input.component.css']
})
export class AuthorInputComponent implements OnInit {
  
  isError: boolean = false;
  errors: String[] = [];
  author: Author = new Author();

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

}
