import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
//import { Currency } from '../currency';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})

export class WebsiteComponent implements OnInit {
  constructor(private client: HttpClient) {}

  goData() {
    this.client.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')
      .subscribe({next: data => {
        console.log(data);
        // this.data = data;
      }}
      );
  }
  
  
  ngOnInit() {
  //     this.client.get('https://min-api.cryptocompare.com/data/price',
  //     {params: new HttpParams().set('fsym', 'BTC').set('tsyms', 'EUR')}
  //     )
  //         .subscribe({
  //           next: data => {
  //             console.log(data)
  //           }
  // });
  }
}
