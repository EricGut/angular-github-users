import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';

import {getUsername} from '../getUsername';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss', '../main.scss']
})
export class ReposComponent implements OnInit {
  
  constructor(private _http: HttpService, private router: Router) { }

  userName:string = getUsername(this.router);

  repos: Object;

  ngOnInit(): void {
    this._http.getUserRepos(this.userName).subscribe(data => {
      this.repos = data;
    });
  }

}
