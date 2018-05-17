
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { User } from '../classes/user';
import { Observable } from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class UserService{

    url: string = 'http://localhost:8080/user';
    headers: any;
    options: any;

    constructor(private http : Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.options = new RequestOptions({headers: this.headers});
    }

    register(user: User){
        let userTmp = Object.assign({}, user);
        userTmp.password = Md5.hashStr(userTmp.password).toString();
        this.http.post(this.url+'/register', userTmp,this.options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    login(logiData: any){
        let tmpData = Object.assign({}, logiData);
        tmpData.password = Md5.hashStr(tmpData.password).toString();
        return this
            .http
            .post(this.url + '/login', tmpData, this.options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        return Observable.throw(error.json().error || 'Server error');
    }

}