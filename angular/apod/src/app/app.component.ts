import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  data$: Observable<any>;

  constructor(private http: HttpClient) {
    this.data$ = new Observable;
  }

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=d36huVswPSig0c0LTJH37giaLhknCsFb1Kl16E8b';
    this.data$ = this.http.get(apiUrl);
  }
}
