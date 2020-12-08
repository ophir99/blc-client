import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blc-app';
  pages = [];
  menus = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:9000/page/all').subscribe((res: any) => {
      console.log(res);
      this.pages = res.data;
      this.menus = this.pages.filter((page) => page.showInMenu);
    });
  }
}
