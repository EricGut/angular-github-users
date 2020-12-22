import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss', '../main.scss']
})
export class ApiComponent implements OnInit {

  users: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getApiData().subscribe(data => {
      this.users = data['items'];
    });

    console.log(this.users);
    
  }

}
