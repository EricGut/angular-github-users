import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';

import {getUsername} from '../getUsername';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', '../main.scss']
})
export class UserComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router) { }

  userName:string = getUsername(this.router);

  user: Object;

  ngOnInit(): void {

    this._http.getUserData(this.userName).subscribe(data => {
      this.user = data;
    });

  }
  

}
