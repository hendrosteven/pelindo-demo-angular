
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class BookService{

    url: string = 'http://localhost:8080/book';
    headers: any;
    options: any;

    constructor(private http : Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.options = new RequestOptions({headers: this.headers});
    }

    findAll() {
        return this
            .http
            .get(this.url, this.options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        return Observable.throw(error.json().error || 'Server error');
    }
}