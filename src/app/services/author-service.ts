import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx'
import { Author } from "../classes/author";

@Injectable()
export class AuthorService{

    url: string = 'http://localhost:8080/author';
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

    save(author: Author){
        this.headers = new Headers({
            'Content-Type' : 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        this.options = new RequestOptions({headers: this.headers});
        return this
            .http
            .post(this.url+"/save", author, this.options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        return Observable.throw(error.json().error || 'Server error');
    }
}