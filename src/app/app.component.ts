import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-mylib-demo';

  serverUrl = 'https://api.tvmaze.com';
  constructor(public http: HttpClient) {}

  getData = () => {
    this.http
      .get(`${this.serverUrl}/shows/25`)
      .subscribe((data) => console.log(data));
  };
}
