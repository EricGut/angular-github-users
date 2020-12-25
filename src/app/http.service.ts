import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get('https://api.github.com/users');
  }

  getUserData(user:string){
    return this.http.get(`https://api.github.com/users/${user}`);
  }

  getUserRepos(user:string){
    return this.http.get(`https://api.github.com/users/${user}/repos`);
  }
}
