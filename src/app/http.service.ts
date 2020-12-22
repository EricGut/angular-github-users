import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get('https://api.github.com/search/users?q=YOUR_NAME');
    
  }
}
